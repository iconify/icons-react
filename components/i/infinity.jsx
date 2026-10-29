import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m4hfgmbhb.css';
import '../../css/z/zrq4gkb0g.css';
import '../../css/x/x1q285c0y.css';
import '../../css/q/qtiwdmb6m.css';
import '../../css/m/mjy-1-b6e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m4hfgmbhb wm-shadow"/><path class="wm-k zrq4gkb0g"/><path class="wm-k x1q285c0y"/><path class="qtiwdmb6m wm-k"/><path class="mjy-1-b6e wm-k"/>`,
		"fallback": "withicons-pastel:infinity",
	});
}

export default Component;
