import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g1qxmdatg.css';

const viewBox = {"width":10,"height":10};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g1qxmdatg"/>`,
		"fallback": "osmic:bollard-10",
	});
}

export default Component;
