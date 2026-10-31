import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zm8_k8bqn.css';
import '../../css/t/tw8conbhh.css';
import '../../css/t/tph-xsvjv.css';
import '../../css/o/ow39d0b3q.css';
import '../../css/a/a1kc05bpe.css';
import '../../css/e/enxy33bkx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="zm8_k8bqn"><path class="tw8conbhh wm-shadow"/><path class="tph-xsvjv wm-a"/><path class="ow39d0b3q wm-a"/><path class="a1kc05bpe wm-shadow"/><path class="enxy33bkx wm-k"/></g>`,
		"fallback": "withicons-brutal:cloud-sun",
	});
}

export default Component;
