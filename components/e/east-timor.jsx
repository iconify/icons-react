import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wta7eoblc.css';
import '../../css/u/u442ulstg.css';
import '../../css/i/ieawaobjk.css';
import '../../css/j/ju2ksxgoz.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wta7eoblc"/><path class="u442ulstg"/><path class="ieawaobjk"/><path class="ju2ksxgoz"/>`,
		"fallback": "tabler-flags:east-timor",
	});
}

export default Component;
