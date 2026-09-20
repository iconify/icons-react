import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ivjvz2eii.css';
import '../../css/j/jynp5bbuo.css';
import '../../css/v/vs87t1upl.css';
import '../../css/h/hx39asb0c.css';
import '../../css/l/l3--kv7xh.css';
import '../../css/p/p3vx97bsa.css';
import '../../css/y/yf8-wbp0r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVG9dBaEceT" width="20" height="12" x="2" y="9" maskUnits="userSpaceOnUse" class="ivjvz2eii"><path class="jynp5bbuo"/><path clip-rule="evenodd" class="vs87t1upl"/></mask><path clip-rule="evenodd" class="hx39asb0c"/><path mask="url(#SVG9dBaEceT)" class="l3--kv7xh"/><path clip-rule="evenodd" class="p3vx97bsa"/><path class="yf8-wbp0r"/>`,
		"fallback": "lets-icons:download-duotone-line",
	});
}

export default Component;
