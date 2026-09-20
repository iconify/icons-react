import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sph3r42wm.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sph3r42wm"/>`,
		"fallback": "streamline-flex:application-add",
	});
}

export default Component;
