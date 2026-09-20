import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/u/u06p2nbkp.css';
import '../../css/s/s8wso4bkc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="u06p2nbkp"/><path class="s8wso4bkc"/></g>`,
		"fallback": "lets-icons:circle-right-alt",
	});
}

export default Component;
