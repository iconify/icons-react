import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rt5pu7wpk.css';
import '../../css/n/nwez_dbwx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rt5pu7wpk"/><path class="nwez_dbwx"/>`,
		"fallback": "lucide-extended:cctv-off-filled",
	});
}

export default Component;
