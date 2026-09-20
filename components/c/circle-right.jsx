import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/u/u06p2nbkp.css';
import '../../css/x/xzt4aekjt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="u06p2nbkp"/><path class="xzt4aekjt"/></g>`,
		"fallback": "lets-icons:circle-right",
	});
}

export default Component;
