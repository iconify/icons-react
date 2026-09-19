import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jbygz4bky.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jbygz4bky"/>`,
		"fallback": "carbon:coupling-facility",
	});
}

export default Component;
