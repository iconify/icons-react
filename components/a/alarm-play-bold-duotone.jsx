import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v6cqcqlkv.css';
import '../../css/z/z-befzbiy.css';
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
		"content": `<path class="v6cqcqlkv"/><path class="z-befzbiy"/><path class="kube8drda"/><path class="jf1pbcbud"/>`,
		"fallback": "solar:alarm-play-bold-duotone",
	});
}

export default Component;
