import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wqznn1ydc.css';
import '../../css/c/c685mtb9b.css';
import '../../css/r/r6jbhscvo.css';
import '../../css/t/t0v4pnbgw.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGrqdKtekq"><g class="wqznn1ydc"><path class="c685mtb9b"/><path class="r6jbhscvo"/><path class="t0v4pnbgw"/></g></mask></defs><path mask="url(#SVGrqdKtekq)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:balance",
	});
}

export default Component;
