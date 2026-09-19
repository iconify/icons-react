import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/e/ehp6y9b0c.css';
import '../../css/a/ak5ietboi.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="ehp6y9b0c"/><path class="ak5ietboi"/></g>`,
		"fallback": "cryptocurrency-color:grc",
	});
}

export default Component;
