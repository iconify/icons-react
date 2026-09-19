import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t2ijnws6o.css';
import '../../css/l/l9mt4mxet.css';
import '../../css/l/l1q7a4ekt.css';
import '../../css/v/v_ahb28ne.css';
import '../../css/n/n6pxjwb3u.css';
import '../../css/o/o0e7nfbhy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t2ijnws6o"/><path class="l9mt4mxet"/><path class="l1q7a4ekt"/><path class="v_ahb28ne"/><path class="n6pxjwb3u"/><circle class="o0e7nfbhy"/>`,
		"fallback": "fxemoji:desert",
	});
}

export default Component;
