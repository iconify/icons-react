import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jajc9k77y.css';
import '../../css/s/s_tz82bpo.css';
import '../../css/c/clztyml9n.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/t/t0_5lgbdo.css';
import '../../css/n/nmse1bcme.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jajc9k77y"/><path class="s_tz82bpo"/><path class="clztyml9n"/><g class="xtpeb-edw"><path class="t0_5lgbdo"/><path class="nmse1bcme"/></g>`,
		"fallback": "solar:incognito-bold-duotone",
	});
}

export default Component;
