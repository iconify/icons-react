import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/ec78oob8p.css';
import '../../css/h/hkqlfx1bz.css';
import '../../css/x/xaymihi1d.css';
import '../../css/w/wri5opbdz.css';
import '../../css/u/uanjz8m2o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ec78oob8p wm-k"/><path class="hkqlfx1bz wm-a"/><path class="wm-shadow xaymihi1d"/><path class="wm-k wri5opbdz"/><path class="uanjz8m2o wm-a"/></g>`,
		"fallback": "withicons:folder-tree-engrave",
	});
}

export default Component;
