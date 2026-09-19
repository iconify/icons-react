import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/s/s7b52r5km.css';
import '../../css/b/bmxotabag.css';
import '../../css/a/ayzfl18ie.css';
import '../../css/a/ak7elgies.css';
import '../../css/z/ztpzmv27e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="s7b52r5km"/><path class="bmxotabag"/><path class="ayzfl18ie"/><path class="ak7elgies"/><path class="ztpzmv27e"/></g>`,
		"fallback": "icon-park:cruise",
	});
}

export default Component;
