import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ulra56alq.css';
import '../../css/g/gr7r812zo.css';
import '../../css/o/osh726bgc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ulra56alq"><path class="gr7r812zo"/><path class="osh726bgc"/></g>`,
		"fallback": "catppuccin:adobe-ae",
	});
}

export default Component;
