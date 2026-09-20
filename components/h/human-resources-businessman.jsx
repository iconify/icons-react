import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/bpvg1pb5f.css';
import '../../css/y/yog3n699b.css';
import '../../css/k/kp7kpfbku.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="bpvg1pb5f"/><path class="yog3n699b"/><path class="kp7kpfbku"/></g>`,
		"fallback": "streamline-freehand:human-resources-businessman",
	});
}

export default Component;
