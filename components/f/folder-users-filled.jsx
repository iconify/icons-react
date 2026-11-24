import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wpcwsfbtq.css';
import '../../css/x/xv4mh2pto.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wpcwsfbtq"/><path class="xv4mh2pto"/>`,
		"fallback": "lucide-extended:folder-users-filled",
	});
}

export default Component;
