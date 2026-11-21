import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xxh80gbuf.css';
import '../../css/f/fj4fd9bjf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xxh80gbuf"/><path class="fj4fd9bjf"/>`,
		"fallback": "lucide-extended:cloud-backup-filled",
	});
}

export default Component;
