import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/vuwp-gbwt.css';
import '../../css/o/oiziuhxcx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="vuwp-gbwt"/><path class="oiziuhxcx"/></g>`,
		"fallback": "withicons:filter-sketch",
	});
}

export default Component;
