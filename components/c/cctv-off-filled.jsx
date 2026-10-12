import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in_nt-ijv.css';
import '../../css/n/nwez_dbwx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="in_nt-ijv"/><path class="nwez_dbwx"/>`,
		"fallback": "lucide-extended:cctv-off-filled",
	});
}

export default Component;
