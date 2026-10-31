import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/e/e9z-qsaai.css';
import '../../css/i/i-jcmx2ua.css';
import '../../css/s/syfidm3bs.css';
import '../../css/g/getwqsgiy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="e9z-qsaai wm-shadow"/><path class="i-jcmx2ua wm-shadow"/><path class="syfidm3bs"/><path class="getwqsgiy"/></g>`,
		"fallback": "withicons-brutal:at-sign",
	});
}

export default Component;
