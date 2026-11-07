import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b7s9cworz.css';
import '../../css/z/zw54mhb2w.css';
import '../../css/g/g5hek6cqk.css';
import '../../css/d/d3ycj6bjr.css';
import '../../css/f/fpxkg0ndt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b7s9cworz"/><path class="zw54mhb2w"/><path class="g5hek6cqk"/><path class="d3ycj6bjr"/><path class="fpxkg0ndt"/>`,
		"fallback": "solar:bomb-minimalistic-bold",
	});
}

export default Component;
