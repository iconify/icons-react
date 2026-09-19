import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dff2otb_i.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dff2otb_i"/>`,
		"fallback": "fa7-solid:heart-music-camera-bolt",
	});
}

export default Component;
