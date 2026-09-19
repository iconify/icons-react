import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wbi1web-l.css';
import '../../css/c/c8qbtokgo.css';
import '../../css/l/l-0qr7dzn.css';
import '../../css/q/qvmzwopuc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wbi1web-l"/><path class="c8qbtokgo"/><path class="l-0qr7dzn"/><path class="qvmzwopuc"/>`,
		"fallback": "fxemoji:envelopewithlightning",
	});
}

export default Component;
