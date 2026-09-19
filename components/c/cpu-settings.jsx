import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/aw2wtqber.css';
import '../../css/v/v7e71vdzm.css';
import '../../css/f/fx_6-bche.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="aw2wtqber"/><path class="v7e71vdzm"/><path class="fx_6-bche"/></g>`,
		"fallback": "hugeicons:cpu-settings",
	});
}

export default Component;
