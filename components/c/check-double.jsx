import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nsq_qlb9g.css';
import '../../css/x/xovybtb3r.css';
import '../../css/q/q8b15obzk.css';
import '../../css/o/opeg25g_n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nsq_qlb9g"/><path class="xovybtb3r"/><path class="q8b15obzk"/><path class="opeg25g_n"/></g>`,
		"fallback": "streamline-cyber-color:check-double",
	});
}

export default Component;
