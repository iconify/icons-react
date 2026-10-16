import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p56r-9gea.css';
import '../../css/x/xx_qfjbte.css';
import '../../css/y/y08wrnukj.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p56r-9gea"/><g transform="matrix(.75 0 0 .75 8 8)"><circle class="xx_qfjbte"/><path class="y08wrnukj"/></g>`,
		"fallback": "thesvg-color:influence",
	});
}

export default Component;
