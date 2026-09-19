import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r4jr_x99l.css';
import '../../css/n/nliu6k9wx.css';
import '../../css/i/ize7wpb1y.css';
import '../../css/x/xustz9bxl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r4jr_x99l"/><path class="nliu6k9wx"/><path class="ize7wpb1y"/><path class="xustz9bxl"/>`,
		"fallback": "flat-color-icons:cell-phone",
	});
}

export default Component;
