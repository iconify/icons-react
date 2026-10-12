import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l8xrq0a2p.css';
import '../../css/d/d-jaw6bew.css';
import '../../css/q/q3wy11brx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l8xrq0a2p"/><path class="d-jaw6bew"/><path class="q3wy11brx"/>`,
		"fallback": "lucide-extended:file-archive-filled",
	});
}

export default Component;
