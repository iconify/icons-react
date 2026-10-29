import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cjxj9uv4t.css';
import '../../css/w/wwzd62b2u.css';
import '../../css/n/n6j21jbma.css';
import '../../css/u/ur5dx2w5x.css';
import '../../css/s/sp6zk-jed.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cjxj9uv4t wm-k"/><path class="wm-k wwzd62b2u"/><path class="n6j21jbma wm-k"/><path class="ur5dx2w5x wm-shine"/><path class="sp6zk-jed wm-a"/></g>`,
		"fallback": "withicons-anime:heart-handshake",
	});
}

export default Component;
