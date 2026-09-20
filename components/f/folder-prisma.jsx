import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wbbjl8juq.css';
import '../../css/h/hlgv9qbae.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wbbjl8juq"/><path class="hlgv9qbae"/>`,
		"fallback": "material-icon-theme:folder-prisma",
	});
}

export default Component;
