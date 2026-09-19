import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/roar_qb4z.css';
import '../../css/i/i_d5bnjew.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="roar_qb4z"/><path class="i_d5bnjew"/>`,
		"fallback": "catppuccin:folder-audit",
	});
}

export default Component;
