import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x0zftu4ib.css';
import '../../css/j/jgww5-ber.css';
import '../../css/g/gjz-fby7l.css';
import '../../css/k/kbqyp-bnk.css';
import '../../css/m/mvjmzrb7j.css';
import '../../css/l/lxdfrng1j.css';
import '../../css/a/ask8jfb3o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x0zftu4ib"/><path class="jgww5-ber"/><path class="gjz-fby7l"/><path class="kbqyp-bnk"/><path class="mvjmzrb7j"/><path class="lxdfrng1j"/><path class="ask8jfb3o"/>`,
		"fallback": "streamline-emojis:beating-heart",
	});
}

export default Component;
