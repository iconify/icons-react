import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hqej--b6i.css';
import '../../css/p/pwd-qubvd.css';
import '../../css/p/pm0g67oqy.css';
import '../../css/n/np6dg4bqz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="hqej--b6i"/><rect class="pwd-qubvd"/><path class="pm0g67oqy"/><rect class="np6dg4bqz"/></g>`,
		"fallback": "majesticons:checkbox-list-detail-line",
	});
}

export default Component;
