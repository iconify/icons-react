import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nzlkm6bkg.css';
import '../../css/u/u65lgdc6d.css';
import '../../css/m/msy7dmbdy.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nzlkm6bkg"/><path class="u65lgdc6d"/><path class="msy7dmbdy"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:genderqueer",
	});
}

export default Component;
