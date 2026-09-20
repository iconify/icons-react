import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/f/fc01xzbmc.css';
import '../../css/z/zuy337bcl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="fc01xzbmc"/><rect class="zuy337bcl"/></g>`,
		"fallback": "lets-icons:chart",
	});
}

export default Component;
