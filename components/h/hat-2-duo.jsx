import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cz1afleut.css';
import '../../css/t/tu0c2bydb.css';
import '../../css/a/a5u7e1buv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cz1afleut"/><path class="tu0c2bydb"/><path class="a5u7e1buv"/></g>`,
		"fallback": "streamline-kameleon-color:hat-2-duo",
	});
}

export default Component;
