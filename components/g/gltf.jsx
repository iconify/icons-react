import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/myq_jd-_w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="myq_jd-_w"/>`,
		"fallback": "simple-icons:gltf",
	});
}

export default Component;
