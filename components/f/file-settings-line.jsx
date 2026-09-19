import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/px1zdkb_w.css';
import '../../css/c/cxwvkfgrp.css';
import '../../css/o/oba9ctbou.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 px1zdkb_w"/><path class="clr-i-outline clr-i-outline-path-2 cxwvkfgrp"/><path class="clr-i-outline clr-i-outline-path-3 oba9ctbou"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:file-settings-line",
	});
}

export default Component;
