import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tqqbrcczl.css';
import '../../css/y/yyncrjb7a.css';
import '../../css/w/wk3lbmb9q.css';
import '../../css/l/l6ytsyb8i.css';
import '../../css/x/xkzbv-bma.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tqqbrcczl"/><path class="yyncrjb7a"/><path class="wk3lbmb9q"/><path class="l6ytsyb8i"/><path class="xkzbv-bma"/>`,
		"fallback": "fxemoji:incomingenvelope",
	});
}

export default Component;
