import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tw5fpob4v.css';
import '../../css/j/jc-0mqb1w.css';
import '../../css/x/xgbznfbhv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="tw5fpob4v"/><path class="jc-0mqb1w"/><path class="xgbznfbhv"/></g>`,
		"fallback": "tabler:binoculars",
	});
}

export default Component;
