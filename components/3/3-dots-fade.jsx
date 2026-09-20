import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ikn_sw-ck.css';
import '../../css/v/v4i2ew1ke.css';
import '../../css/q/qadltybwf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="ikn_sw-ck"><animate id="SVG7x14Dcom" fill="freeze" attributeName="opacity" begin="0;SVGqSjG0dUp.end-0.25s" dur="0.75s" values="1;.2"/></circle><circle opacity=".4" class="v4i2ew1ke"><animate fill="freeze" attributeName="opacity" begin="SVG7x14Dcom.begin+0.15s" dur="0.75s" values="1;.2"/></circle><circle opacity=".3" class="qadltybwf"><animate id="SVGqSjG0dUp" fill="freeze" attributeName="opacity" begin="SVG7x14Dcom.begin+0.3s" dur="0.75s" values="1;.2"/></circle>`,
		"fallback": "svg-spinners:3-dots-fade",
	});
}

export default Component;
