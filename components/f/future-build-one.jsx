import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/h/hc_1lmbqx.css';
import '../../css/a/azoor3gvj.css';
import '../../css/s/sdbl3ttsf.css';
import '../../css/x/xde-2_bup.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="hc_1lmbqx"/><path class="azoor3gvj"/><path class="sdbl3ttsf"/><path class="xde-2_bup"/></g>`,
		"fallback": "icon-park-outline:future-build-one",
	});
}

export default Component;
