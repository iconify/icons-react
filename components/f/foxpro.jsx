import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c2dw42tyk.css';
import '../../css/n/n9q2ej5ie.css';
import '../../css/m/mnz3z3wzp.css';

const viewBox = {"width":300,"height":300};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c2dw42tyk"/><path class="n9q2ej5ie"/><path class="mnz3z3wzp"/>`,
		"fallback": "material-icon-theme:foxpro",
	});
}

export default Component;
