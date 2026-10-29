import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a42membev.css';
import '../../css/k/kgqu8zbet.css';
import '../../css/h/hu2mk8bbp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a42membev"/><path class="kgqu8zbet"/><path class="hu2mk8bbp"/>`,
		"fallback": "withicons-bauhaus:crown",
	});
}

export default Component;
