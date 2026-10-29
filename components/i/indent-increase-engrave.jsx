import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/p/p8u-xw6ko.css';
import '../../css/s/szbd9si1d.css';
import '../../css/w/wpz-cpbzk.css';
import '../../css/m/m6i-bjqet.css';
import '../../css/v/vgssyxiqi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="p8u-xw6ko wm-k"/><path class="szbd9si1d wm-a"/><path class="wm-shadow wpz-cpbzk"/><path class="m6i-bjqet wm-k"/><path class="vgssyxiqi wm-a"/></g>`,
		"fallback": "withicons:indent-increase-engrave",
	});
}

export default Component;
