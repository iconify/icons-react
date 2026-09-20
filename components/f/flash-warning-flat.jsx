import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dx7r04gac.css';
import '../../css/g/gu0pejb-c.css';
import '../../css/u/um7la21si.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="dx7r04gac"/><path class="gu0pejb-c"/><path clip-rule="evenodd" class="um7la21si"/></g>`,
		"fallback": "streamline-flex-color:flash-warning-flat",
	});
}

export default Component;
