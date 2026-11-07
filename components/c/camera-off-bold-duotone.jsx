import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wcq9v-bih.css';
import '../../css/d/d-wa8wj9d.css';
import '../../css/z/zvnq9o5sc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wcq9v-bih"/><path class="d-wa8wj9d"/><path class="zvnq9o5sc"/>`,
		"fallback": "solar:camera-off-bold-duotone",
	});
}

export default Component;
