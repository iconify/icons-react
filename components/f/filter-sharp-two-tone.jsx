import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/u/uwt0q_bjd.css';
import '../../css/n/n8j3ytb6t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="uwt0q_bjd"/><path class="n8j3ytb6t"/></g>`,
		"fallback": "keyline-icons:filter-sharp-two-tone",
	});
}

export default Component;
