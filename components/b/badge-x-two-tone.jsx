import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g70whwsdk.css';
import '../../css/x/xgaf0nbdt.css';
import '../../css/a/ajkm4g1km.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="g70whwsdk"/><path class="xgaf0nbdt"/><path class="ajkm4g1km"/></g>`,
		"fallback": "keyline-icons:badge-x-two-tone",
	});
}

export default Component;
