import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yc13qrljd.css';
import '../../css/q/qpk590b-s.css';
import '../../css/p/podz5_tnk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="yc13qrljd"/><path class="qpk590b-s"/><path class="podz5_tnk"/></g>`,
		"fallback": "keyline-icons:chart-scatter-bubble-sparkles-two-tone",
	});
}

export default Component;
