import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l2g4xxswo.css';
import '../../css/d/doqrq2blo.css';
import '../../css/u/uf8ttfzhy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l2g4xxswo"/><path class="doqrq2blo"/><path class="uf8ttfzhy"/>`,
		"fallback": "gcp:cloud-build",
	});
}

export default Component;
