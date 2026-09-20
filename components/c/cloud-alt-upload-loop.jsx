import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wl247z.css';
import '../../css/j/jh2nhq.css';
import '../../css/d/d-gf8qwu.css';
import '../../css/s/so-from-60.css';
import '../../css/d/d-6uh96y.css';
import '../../css/d/d-t2f-vz.css';
import '../../css/d/d-46g2pq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wl247z"/><path class="jh2nhq"/>`,
		"fallback": "line-md:cloud-alt-upload-loop",
	});
}

export default Component;
