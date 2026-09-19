import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jaxt6_bwl.css';
import '../../css/x/x4jziszvm.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jaxt6_bwl"/><path class="x4jziszvm"/>`,
		"fallback": "carbon:character-integer",
	});
}

export default Component;
