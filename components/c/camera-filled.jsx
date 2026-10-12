import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dxjypom5p.css';
import '../../css/h/h_yj_ybgb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dxjypom5p"/><path clip-rule="evenodd" class="h_yj_ybgb"/>`,
		"fallback": "lucide-extended:camera-filled",
	});
}

export default Component;
