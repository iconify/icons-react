import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z9ttgzwoy.css';
import '../../css/a/a9r0l3bpj.css';
import '../../css/p/pq5d4i-df.css';
import '../../css/c/csl8dlbrs.css';
import '../../css/r/rjunq3ykp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm-a z9ttgzwoy"/><path class="a9r0l3bpj wm-a"/><path class="pq5d4i-df wm-k"/><path class="csl8dlbrs wm-k"/><path class="rjunq3ykp wm-a"/>`,
		"fallback": "withicons-bauhaus:alarm-clock",
	});
}

export default Component;
