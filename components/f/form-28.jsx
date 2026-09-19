import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zh8kgxbrg.css';
import '../../css/m/mmftclber.css';
import '../../css/y/y8pwr279m.css';
import '../../css/b/bd93sf5sp.css';
import '../../css/f/fr236kbdl.css';
import '../../css/c/c8pavbbjd.css';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path fill="url(#SVGErK8BdUl)" class="zh8kgxbrg"/><path fill="url(#SVGkRQBvetf)" class="mmftclber"/><defs><linearGradient id="SVGErK8BdUl" x1="10.857" x2="19.286" y1="3" y2="23.814" gradientUnits="userSpaceOnUse"><stop class="y8pwr279m"/><stop offset="1" class="bd93sf5sp"/></linearGradient><linearGradient id="SVGkRQBvetf" x1="5.2" x2="24.614" y1="5.725" y2="9.282" gradientUnits="userSpaceOnUse"><stop class="fr236kbdl"/><stop offset="1" class="c8pavbbjd"/></linearGradient></defs></g>`,
		"fallback": "fluent-color:form-28",
	});
}

export default Component;
