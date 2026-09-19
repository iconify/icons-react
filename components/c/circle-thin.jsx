import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/coj1sq9ft.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="coj1sq9ft"/>`,
		"fallback": "icons8:circle-thin",
	});
}

export default Component;
