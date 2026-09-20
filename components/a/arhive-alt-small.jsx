import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/b/bb5htrycq.css';
import '../../css/b/bx8bs9bgo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="bb5htrycq"/><path class="bx8bs9bgo"/></g>`,
		"fallback": "lets-icons:arhive-alt-small",
	});
}

export default Component;
