import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xomud01jy.css';
import '../../css/h/hp1ekwx9t.css';
import '../../css/f/f5mmvebtg.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="xomud01jy"/><path clip-rule="evenodd" class="hp1ekwx9t"/><path clip-rule="evenodd" class="f5mmvebtg"/></g>`,
		"fallback": "skill-icons:arduino",
	});
}

export default Component;
