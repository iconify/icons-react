import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/h/hyjefc_tv.css';
import '../../css/d/dmp7r4bng.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="hyjefc_tv"/><path class="dmp7r4bng"/></g>`,
		"fallback": "akar-icons:fork-right",
	});
}

export default Component;
