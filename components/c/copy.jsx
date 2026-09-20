import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wa8xxfbmy.css';
import '../../css/s/sms_5zbgi.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wa8xxfbmy"/><path class="sms_5zbgi"/>`,
		"fallback": "oui:copy",
	});
}

export default Component;
