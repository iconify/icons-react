import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hzaj_mpyu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hzaj_mpyu"/>`,
		"fallback": "famicons:barbell",
	});
}

export default Component;
