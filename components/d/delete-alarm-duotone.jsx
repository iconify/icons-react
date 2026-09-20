import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b0n8abcgf.css';
import '../../css/d/di9vi1brc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b0n8abcgf"/><path class="di9vi1brc"/></g>`,
		"fallback": "si:delete-alarm-duotone",
	});
}

export default Component;
