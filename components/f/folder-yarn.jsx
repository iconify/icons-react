import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/roar_qb4z.css';
import '../../css/c/cuzr41b_o.css';
import '../../css/d/d6up25bex.css';
import '../../css/z/ziil8acyu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="roar_qb4z"/><g class="cuzr41b_o"><path transform="matrix(.09189 0 0 .09115 6.896 6.683)" class="d6up25bex"/><path transform="matrix(.09189 0 0 .09115 6.896 6.683)" class="ziil8acyu"/></g>`,
		"fallback": "catppuccin:folder-yarn",
	});
}

export default Component;
