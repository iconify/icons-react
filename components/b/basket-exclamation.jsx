import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/trfavybup.css';
import '../../css/m/mzv57_jbo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="trfavybup"/><path class="mzv57_jbo"/></g>`,
		"fallback": "tabler:basket-exclamation",
	});
}

export default Component;
