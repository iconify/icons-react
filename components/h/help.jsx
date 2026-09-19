import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vrmf97lvx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vrmf97lvx"/>`,
		"fallback": "at-icons:help",
	});
}

export default Component;
