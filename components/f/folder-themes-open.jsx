import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h1crshb5u.css';
import '../../css/v/v5tuebber.css';
import '../../css/a/apt0ate_c.css';
import '../../css/p/pwxs7vx-g.css';
import '../../css/o/oz9hddcsy.css';
import '../../css/b/bo5hnu2as.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h1crshb5u"/><g class="v5tuebber"><path transform="matrix(.41667 0 0 .4167 6.75 6.747)" class="apt0ate_c"/><path transform="matrix(.41667 0 0 .4167 6.75 6.747)" class="pwxs7vx-g"/><path transform="matrix(.41667 0 0 .4167 6.75 6.747)" class="oz9hddcsy"/><path transform="matrix(.41667 0 0 .4167 6.75 6.747)" class="bo5hnu2as"/></g>`,
		"fallback": "catppuccin:folder-themes-open",
	});
}

export default Component;
