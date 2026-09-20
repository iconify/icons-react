import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/edgnwna1c.css';
import '../../css/e/earwreboe.css';
import '../../css/w/w-cy9ebus.css';
import '../../css/w/wajvew1vr.css';
import '../../css/r/rstbl2blk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="edgnwna1c"/><path class="earwreboe"/><path clip-rule="evenodd" class="w-cy9ebus"/><path class="wajvew1vr"/><path class="rstbl2blk"/>`,
		"fallback": "token:h2o",
	});
}

export default Component;
