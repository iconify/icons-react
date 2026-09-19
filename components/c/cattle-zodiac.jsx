import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3lph30dl.css';
import '../../css/q/qovcvsn9r.css';
import '../../css/d/ds73arb-k.css';
import '../../css/d/dkgqydb5f.css';
import '../../css/b/bnm-08rej.css';
import '../../css/w/wc57jipda.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3lph30dl"><path class="qovcvsn9r"/><path class="ds73arb-k"/><path class="dkgqydb5f"/><path class="bnm-08rej"/><path class="wc57jipda"/></g>`,
		"fallback": "icon-park:cattle-zodiac",
	});
}

export default Component;
