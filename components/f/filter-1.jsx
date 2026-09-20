import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/brj994bpb.css';
import '../../css/o/oqugd72ja.css';
import '../../css/b/boo3kqbtm.css';
import '../../css/e/ekluodq3u.css';
import '../../css/w/wulvrmbpd.css';
import '../../css/k/kpvnf8b0r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="brj994bpb"/><path class="oqugd72ja"/><path class="boo3kqbtm"/><path class="ekluodq3u"/><path class="wulvrmbpd"/><path class="kpvnf8b0r"/></g>`,
		"fallback": "streamline-cyber-color:filter-1",
	});
}

export default Component;
