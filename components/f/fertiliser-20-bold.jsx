import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z_d9ezbhu.css';
import '../../css/q/qrcs0rmbe.css';
import '../../css/i/i9id0sb-y.css';
import '../../css/n/nfh4_j2mn.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z_d9ezbhu"/><path class="qrcs0rmbe"/><path class="i9id0sb-y"/><path class="nfh4_j2mn"/>`,
		"fallback": "energy-icons:fertiliser-20-bold",
	});
}

export default Component;
