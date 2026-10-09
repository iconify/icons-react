import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mb1oskbsf.css';
import '../../css/m/mkb2ul-2f.css';
import '../../css/b/bh86-acav.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mb1oskbsf"/><path class="mkb2ul-2f"/><path class="bh86-acav"/>`,
		"fallback": "energy-icons:chart-donut-20",
	});
}

export default Component;
