import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i2y5mgk4u.css';
import '../../css/x/xnlpiqbcd.css';
import '../../css/b/bwk89nrhx.css';
import '../../css/f/f--nfqx9d.css';
import '../../css/q/q_pit_2ju.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i2y5mgk4u"/><path class="xnlpiqbcd"/><path class="bwk89nrhx"/><path class="f--nfqx9d"/><path class="q_pit_2ju"/>`,
		"fallback": "selfhst:automatic1111-dark",
	});
}

export default Component;
