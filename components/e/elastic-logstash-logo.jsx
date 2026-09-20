import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/g/gke6lpbek.css';
import '../../css/n/n37up1lms.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="gke6lpbek"/><path class="n37up1lms"/></g>`,
		"fallback": "streamline-logos:elastic-logstash-logo",
	});
}

export default Component;
