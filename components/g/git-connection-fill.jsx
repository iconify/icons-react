import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lq-vfcc-t.css';
import '../../css/t/t1u28vndk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="lq-vfcc-t"/><path class="t1u28vndk"/></g>`,
		"fallback": "keyline-icons:git-connection-fill",
	});
}

export default Component;
