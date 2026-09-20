import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/r-z8_0g7f.css';
import '../../css/e/eomm7wfdj.css';
import '../../css/d/d72y-xbjv.css';
import '../../css/j/jinalvbrx.css';
import '../../css/t/tm3f2gb8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="r-z8_0g7f"/><path class="eomm7wfdj"/><path class="d72y-xbjv"/><path class="jinalvbrx"/><path class="tm3f2gb8q"/></g>`,
		"fallback": "solar:container-broken",
	});
}

export default Component;
