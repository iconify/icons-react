import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g2s1gywra.css';
import '../../css/l/lzoghccnd.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/w/wp9nfebcy.css';
import '../../css/k/kq1305ues.css';
import '../../css/a/a732xmrfu.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="g2s1gywra"/><path class="lzoghccnd"/><g class="jn8qy4bru"><path class="wp9nfebcy"/><path class="kq1305ues"/><path class="a732xmrfu"/></g>`,
		"fallback": "openmoji:incoming-envelope",
	});
}

export default Component;
