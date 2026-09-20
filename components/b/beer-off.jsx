import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/e-z1p3u-a.css';
import '../../css/w/wk09lfx3q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="e-z1p3u-a"/><path class="wk09lfx3q"/></g>`,
		"fallback": "lucide:beer-off",
	});
}

export default Component;
