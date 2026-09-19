import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t7_lms_6w.css';
import '../../css/v/vbpiltbkp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="t7_lms_6w"/><path class="vbpiltbkp"/>`,
		"fallback": "boxicons:gallery-horizontal-end-filled",
	});
}

export default Component;
