import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/s/sxk8dtmes.css';
import '../../css/a/a0oumfb3a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="sxk8dtmes"/><path class="a0oumfb3a"/></g>`,
		"fallback": "lets-icons:arhives-alt",
	});
}

export default Component;
