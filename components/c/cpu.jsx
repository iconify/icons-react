import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zkhfd4j4e.css';
import '../../css/t/t2go5ivjc.css';
import '../../css/k/k9_6kwbvw.css';
import '../../css/b/bsrzfwwmh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm-k zkhfd4j4e"/><path class="t2go5ivjc wm-k"/><path class="k9_6kwbvw wm-a"/><path class="bsrzfwwmh wm-a"/>`,
		"fallback": "withicons-bauhaus:cpu",
	});
}

export default Component;
