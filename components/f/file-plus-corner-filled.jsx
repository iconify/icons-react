import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o6gs46bps.css';
import '../../css/f/fi3u09b7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o6gs46bps"/><path class="fi3u09b7v"/>`,
		"fallback": "lucide-extended:file-plus-corner-filled",
	});
}

export default Component;
