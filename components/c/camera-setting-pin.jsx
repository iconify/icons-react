import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/e/e9-6i3ksy.css';
import '../../css/i/iiyi3bnoe.css';
import '../../css/w/w4ctc-m2j.css';
import '../../css/d/dkx6j8b9w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="e9-6i3ksy"/><path class="iiyi3bnoe"/><path class="w4ctc-m2j"/><path class="dkx6j8b9w"/></g>`,
		"fallback": "streamline-sharp-color:camera-setting-pin",
	});
}

export default Component;
