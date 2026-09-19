import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/v/vp8jg4bpk.css';
import '../../css/h/hnl7cwwfb.css';
import '../../css/u/ugc-jbcel.css';
import '../../css/e/e7tz53s-l.css';
import '../../css/l/lf-pnnrqx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="vp8jg4bpk"/><path class="hnl7cwwfb"/><path class="ugc-jbcel"/><path class="e7tz53s-l"/><path class="lf-pnnrqx"/></g>`,
		"fallback": "icon-park:id-card",
	});
}

export default Component;
