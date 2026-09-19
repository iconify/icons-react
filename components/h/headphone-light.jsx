import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g9t6brbca.css';
import '../../css/b/b9wgmpbap.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g9t6brbca"/><path class="b9wgmpbap"/></g>`,
		"fallback": "iconamoon:headphone-light",
	});
}

export default Component;
