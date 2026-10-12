import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zlzul8kzr.css';
import '../../css/s/sw83ssb_p.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zlzul8kzr"/><path class="sw83ssb_p"/>`,
		"fallback": "garden:bar-chart-square-stroke-20",
	});
}

export default Component;
