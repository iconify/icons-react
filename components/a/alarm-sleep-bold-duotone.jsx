import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v6cqcqlkv.css';
import '../../css/j/jp5z67b1t.css';
import '../../css/k/kube8drda.css';
import '../../css/j/jf1pbcbud.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v6cqcqlkv"/><path class="jp5z67b1t"/><path class="kube8drda"/><path class="jf1pbcbud"/>`,
		"fallback": "solar:alarm-sleep-bold-duotone",
	});
}

export default Component;
