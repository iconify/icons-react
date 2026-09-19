import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h76a9ql5h.css';
import '../../css/i/i5o3gv_dc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="duoicon-primary-layer h76a9ql5h"/><path class="duoicon-secondary-layer i5o3gv_dc"/>`,
		"fallback": "duo-icons:computer-camera",
	});
}

export default Component;
