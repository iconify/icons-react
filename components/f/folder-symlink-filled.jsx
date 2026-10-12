import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lrt4_oljn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lrt4_oljn"/>`,
		"fallback": "lucide-extended:folder-symlink-filled",
	});
}

export default Component;
