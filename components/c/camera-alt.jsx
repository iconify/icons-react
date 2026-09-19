import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/va7_sv_vn.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="va7_sv_vn"/>`,
		"fallback": "fa7-regular:camera-alt",
	});
}

export default Component;
