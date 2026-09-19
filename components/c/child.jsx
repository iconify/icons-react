import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/kqquq1syq.css';
import '../../css/s/sdbx3u-za.css';
import '../../css/l/lzvnpfbek.css';
import '../../css/j/jix0v0bvn.css';
import '../../css/n/n891lmcsl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="kqquq1syq"/><path class="sdbx3u-za"/><path class="lzvnpfbek"/><path class="jix0v0bvn"/><path class="n891lmcsl"/></g>`,
		"fallback": "hugeicons:child",
	});
}

export default Component;
