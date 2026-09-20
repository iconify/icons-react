import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f95-ijf-n.css';
import '../../css/v/vriz6s5yi.css';
import '../../css/f/fzb--mpnf.css';
import '../../css/e/e20g_bbpi.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f95-ijf-n"/><g class="vriz6s5yi"><path class="fzb--mpnf"/><path class="e20g_bbpi"/></g>`,
		"fallback": "material-icon-theme:folder-syntax",
	});
}

export default Component;
