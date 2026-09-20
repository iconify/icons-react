import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/am28lx2fj.css';
import '../../css/n/ncr5l6peb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="am28lx2fj"/><path class="ncr5l6peb"/>`,
		"fallback": "lets-icons:folder-dublicate-duotone",
	});
}

export default Component;
