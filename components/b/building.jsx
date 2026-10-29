import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z_xcypzrr.css';
import '../../css/t/t0x6_jbcw.css';
import '../../css/j/jds09nhnk.css';
import '../../css/b/bw5b8wbzu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm-k z_xcypzrr"/><path class="t0x6_jbcw wm-k"/><path class="jds09nhnk wm-a"/><path class="bw5b8wbzu wm-k"/>`,
		"fallback": "withicons-bauhaus:building",
	});
}

export default Component;
