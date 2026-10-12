import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yf_kpfbgg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yf_kpfbgg"/>`,
		"fallback": "lucide-extended:clock-5-filled",
	});
}

export default Component;
