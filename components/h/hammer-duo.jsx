import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cz1afleut.css';
import '../../css/g/gpa-tr_6l.css';
import '../../css/w/w_xpkobkj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cz1afleut"/><path class="gpa-tr_6l"/><path class="w_xpkobkj"/></g>`,
		"fallback": "streamline-kameleon-color:hammer-duo",
	});
}

export default Component;
