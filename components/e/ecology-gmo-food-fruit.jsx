import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t0pndqzpr.css';
import '../../css/z/zrt59zbqc.css';
import '../../css/n/n4ddx_b7r.css';
import '../../css/y/ysf2mac5i.css';
import '../../css/e/ebuae_bkt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t0pndqzpr"/><path class="zrt59zbqc"/><path class="n4ddx_b7r"/><path class="ysf2mac5i"/><path class="ebuae_bkt"/>`,
		"fallback": "streamline-pixel:ecology-gmo-food-fruit",
	});
}

export default Component;
