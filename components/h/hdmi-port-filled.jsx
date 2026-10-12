import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y32u2fimd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y32u2fimd"/>`,
		"fallback": "lucide-extended:hdmi-port-filled",
	});
}

export default Component;
