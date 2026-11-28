import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zeg-p9o_z.css';
import '../../css/l/ltl30k2-b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary zeg-p9o_z"/><path class="ltl30k2-b primary"/>`,
		"fallback": "iconaut:flow-manual-input-duo",
	});
}

export default Component;
