import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cixtz2ice.css';
import '../../css/y/yo5kbeb8m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cixtz2ice"/><path class="yo5kbeb8m"/>`,
		"fallback": "lucide-extended:database-backup-filled",
	});
}

export default Component;
