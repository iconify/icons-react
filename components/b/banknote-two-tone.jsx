import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/ta7j8suqy.css';
import '../../css/n/n7cc2rm8i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ta7j8suqy"/><path class="n7cc2rm8i"/></g>`,
		"fallback": "keyline-icons:banknote-two-tone",
	});
}

export default Component;
