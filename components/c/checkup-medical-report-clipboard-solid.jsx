import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fyofq2ely.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fyofq2ely"/>`,
		"fallback": "streamline-flex:checkup-medical-report-clipboard-solid",
	});
}

export default Component;
