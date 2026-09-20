import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/n/nmbfzp78r.css';
import '../../css/n/n2vefrbse.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="nmbfzp78r"/><path class="n2vefrbse"/></g>`,
		"fallback": "lets-icons:box-alt",
	});
}

export default Component;
