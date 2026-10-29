import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ajkh56jez.css';
import '../../css/q/qqtms-hqh.css';
import '../../css/e/etaoo_l4n.css';
import '../../css/z/z-mlyhb3g.css';
import '../../css/x/xth14rb-m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ajkh56jez wm-shadow"/><path class="qqtms-hqh wm-k"/><path class="etaoo_l4n wm-k"/><path class="wm-a z-mlyhb3g"/><path class="wm-a xth14rb-m"/>`,
		"fallback": "withicons-pastel:check-check",
	});
}

export default Component;
