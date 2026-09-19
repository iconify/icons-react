import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nq44ds2pu.css';
import '../../css/z/zdxf-6bfs.css';
import '../../css/v/vwi-_q-kl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="nq44ds2pu"/><path class="zdxf-6bfs"/><path class="vwi-_q-kl"/>`,
		"fallback": "carbon:container-engine",
	});
}

export default Component;
