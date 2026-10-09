import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ao6abl51c.css';
import '../../css/x/xn11esbqe.css';
import '../../css/u/umr1ykbuz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ao6abl51c"/><path class="xn11esbqe"/><path class="umr1ykbuz"/>`,
		"fallback": "energy-icons:certificate-48",
	});
}

export default Component;
