import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v7-8g_b_v.css';
import '../../css/r/r-w9wkbha.css';
import '../../css/o/of2duy_cb.css';
import '../../css/h/h3-vuzbus.css';
import '../../css/j/jrec5m78l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v7-8g_b_v"/><path class="r-w9wkbha"/><path class="of2duy_cb"/><path clip-rule="evenodd" class="h3-vuzbus"/><path clip-rule="evenodd" class="jrec5m78l"/>`,
		"fallback": "solar:dropper-minimalistic-outline",
	});
}

export default Component;
