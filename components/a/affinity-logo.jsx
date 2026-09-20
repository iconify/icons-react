import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/x/xbaygnbuy.css';
import '../../css/w/whw1lhd-b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="xbaygnbuy"/><path class="whw1lhd-b"/></g>`,
		"fallback": "streamline-logos:affinity-logo",
	});
}

export default Component;
