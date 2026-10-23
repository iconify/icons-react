import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qzzmcmn5v.css';
import '../../css/x/xv4mh2pto.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qzzmcmn5v"/><path class="xv4mh2pto"/>`,
		"fallback": "lucide-extended:folder-users-filled",
	});
}

export default Component;
