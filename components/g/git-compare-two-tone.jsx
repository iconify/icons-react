import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/l-quodbjv.css';
import '../../css/l/lq-vfcc-t.css';
import '../../css/o/oabjryw0h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="l-quodbjv"/><path class="lq-vfcc-t"/><path class="oabjryw0h"/></g>`,
		"fallback": "keyline-icons:git-compare-two-tone",
	});
}

export default Component;
