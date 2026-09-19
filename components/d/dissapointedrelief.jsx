import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h32t530tv.css';
import '../../css/n/n9cednr3v.css';
import '../../css/e/eto5habog.css';
import '../../css/y/y-kv0yb_u.css';
import '../../css/q/qbjticgye.css';
import '../../css/e/e0-wpfbml.css';
import '../../css/n/nfh9zsbdl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h32t530tv"/><path class="n9cednr3v"/><path class="eto5habog"/><path class="y-kv0yb_u"/><path class="qbjticgye"/><path class="e0-wpfbml"/><path class="nfh9zsbdl"/>`,
		"fallback": "fxemoji:dissapointedrelief",
	});
}

export default Component;
