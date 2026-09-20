import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/fcda0mbon.css';
import '../../css/o/ovc1wubpy.css';
import '../../css/e/e56ggwbwp.css';
import '../../css/c/c1x9kctkl.css';
import '../../css/v/voo-wv6tx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="fcda0mbon"/><path class="ovc1wubpy"/><path class="e56ggwbwp"/><path class="c1x9kctkl"/><path class="voo-wv6tx"/></g>`,
		"fallback": "solar:face-scan-square-bold",
	});
}

export default Component;
