import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/u/ul8dofb2c.css';
import '../../css/q/qk46o5bnp.css';
import '../../css/n/nc5-41bqe.css';
import '../../css/q/qfqfuabmu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="ul8dofb2c"/><path class="qk46o5bnp"/><path class="nc5-41bqe"/><path class="qfqfuabmu"/></g>`,
		"fallback": "streamline-cyber:atom-1",
	});
}

export default Component;
