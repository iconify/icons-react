import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/b0dyb4b4v.css';
import '../../css/s/sej9af0wr.css';
import '../../css/g/gwjck2cdm.css';
import '../../css/e/eq3frqb0l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="b0dyb4b4v"/><path class="sej9af0wr"/><path class="gwjck2cdm"/><path class="eq3frqb0l"/></g>`,
		"fallback": "solar:chat-square-code-line-duotone",
	});
}

export default Component;
