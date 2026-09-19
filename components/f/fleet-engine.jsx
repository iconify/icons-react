import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s6mstu8gp.css';
import '../../css/t/tqozfyn3j.css';
import '../../css/q/qtnk1jbio.css';
import '../../css/m/mwlrzeqkq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="s6mstu8gp"><path class="tqozfyn3j"/><path class="qtnk1jbio"/><path class="mwlrzeqkq"/></g>`,
		"fallback": "gcp:fleet-engine",
	});
}

export default Component;
