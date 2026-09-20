import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/c/c1qs2i.css';
import '../../css/a/axqjwt.css';
import '../../css/z/zt_tcx.css';
import '../../css/s/so-from-12.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c c1qs2i"/><path class="a0m25c axqjwt"/><path class="a0m25c zt_tcx"/>`,
		"fallback": "line-md:chevron-triple-right",
	});
}

export default Component;
