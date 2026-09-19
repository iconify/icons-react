import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/q/qxdk-jbxj.css';
import '../../css/m/m54lx25iz.css';
import '../../css/u/ukqelmnlf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="qxdk-jbxj"/><path class="m54lx25iz"/><path class="ukqelmnlf"/></g>`,
		"fallback": "iconamoon:discount-light",
	});
}

export default Component;
