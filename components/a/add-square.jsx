import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/f/f-salgbqh.css';
import '../../css/o/olc6debim.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="f-salgbqh"/><path class="olc6debim"/></g>`,
		"fallback": "lets-icons:add-square",
	});
}

export default Component;
