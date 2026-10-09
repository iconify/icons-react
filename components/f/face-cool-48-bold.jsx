import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n2neunb3u.css';
import '../../css/v/vd_rptthx.css';
import '../../css/c/c9fw31b7n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n2neunb3u"/><path class="vd_rptthx"/><path class="c9fw31b7n"/>`,
		"fallback": "energy-icons:face-cool-48-bold",
	});
}

export default Component;
