import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f9j6r52xi.css';
import '../../css/c/c-cig4bdd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f9j6r52xi"/><path class="c-cig4bdd"/>`,
		"fallback": "carbon:direction-loop-left-filled",
	});
}

export default Component;
