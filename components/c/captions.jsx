import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gzf0igbay.css';
import '../../css/t/tkzg87fbm.css';
import '../../css/t/tnhwrabjw.css';
import '../../css/b/bfs_c3bzd.css';
import '../../css/f/fi8pspbtq.css';
import '../../css/z/zbxk0_bid.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gzf0igbay wm-k"/><path class="tkzg87fbm wm-k"/><path class="tnhwrabjw wm-k"/><path class="bfs_c3bzd wm-shine"/><path class="fi8pspbtq wm-k"/><path class="wm-a zbxk0_bid"/></g>`,
		"fallback": "withicons-anime:captions",
	});
}

export default Component;
