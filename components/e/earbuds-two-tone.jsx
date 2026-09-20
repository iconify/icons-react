import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pc44scclm.css';
import '../../css/z/zjai_7b2o.css';
import '../../css/j/jkh-81bok.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="pc44scclm"/><path class="zjai_7b2o"/><path class="jkh-81bok"/></g>`,
		"fallback": "keyline-icons:earbuds-two-tone",
	});
}

export default Component;
