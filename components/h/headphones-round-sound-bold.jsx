import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x35xwlb8d.css';
import '../../css/z/zs6jv9bdw.css';
import '../../css/x/xz-3bfbvl.css';
import '../../css/l/l07j66hls.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x35xwlb8d"/><path clip-rule="evenodd" class="zs6jv9bdw"/><path clip-rule="evenodd" class="xz-3bfbvl"/><path clip-rule="evenodd" class="l07j66hls"/>`,
		"fallback": "solar:headphones-round-sound-bold",
	});
}

export default Component;
