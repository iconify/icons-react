import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/roar_qb4z.css';
import '../../css/p/pgzvnfbvt.css';
import '../../css/r/r--b2dpcc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="roar_qb4z"/><circle class="pgzvnfbvt"/><path class="r--b2dpcc"/>`,
		"fallback": "catppuccin:folder-private",
	});
}

export default Component;
