import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrylsobpa.css';
import '../../css/d/dcxj6tbtg.css';
import '../../css/b/bvmkafbrv.css';
import '../../css/k/kk28j3r0s.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nrylsobpa"/><path class="dcxj6tbtg"/><path class="bvmkafbrv"/><path class="kk28j3r0s"/>`,
		"fallback": "carbon:hearing",
	});
}

export default Component;
