import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/emw2e35wi.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="emw2e35wi"/>`,
		"fallback": "streamline-flex:checkup-medical-report-clipboard-remix",
	});
}

export default Component;
