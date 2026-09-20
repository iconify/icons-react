import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sn3c58ouz.css';
import '../../css/m/mlkknnbjm.css';
import '../../css/z/ztq2uyxtt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="sn3c58ouz"/><path class="mlkknnbjm"/><path class="ztq2uyxtt"/></g>`,
		"fallback": "tabler:color-filter",
	});
}

export default Component;
