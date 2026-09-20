import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1mjunbsu.css';
import '../../css/v/vqelu_bkx.css';
import '../../css/u/u0h_d--dx.css';

const viewBox = {"width":6323,"height":5778};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1mjunbsu"><path class="vqelu_bkx"/><path class="u0h_d--dx"/></g>`,
		"fallback": "thesvg-color:dokploy",
	});
}

export default Component;
