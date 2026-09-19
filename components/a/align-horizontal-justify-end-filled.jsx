import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/olh7nccxm.css';
import '../../css/m/m0esjaiqj.css';
import '../../css/j/jhkw66bqk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="olh7nccxm"/><rect class="m0esjaiqj"/><path class="jhkw66bqk"/>`,
		"fallback": "boxicons:align-horizontal-justify-end-filled",
	});
}

export default Component;
