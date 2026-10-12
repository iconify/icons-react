import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iyv0rce4w.css';
import '../../css/m/m5_8ni9aa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="iyv0rce4w"/><path class="m5_8ni9aa"/>`,
		"fallback": "lucide-extended:candy-off-filled",
	});
}

export default Component;
