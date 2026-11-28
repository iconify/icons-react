import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k-3cfnbpf.css';
import '../../css/w/wu_yq_b9q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="k-3cfnbpf secondary"/><path class="primary wu_yq_b9q"/></g>`,
		"fallback": "iconaut:file-stack-duotone",
	});
}

export default Component;
