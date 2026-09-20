import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qk3eoukfo.css';
import '../../css/b/bstbd176c.css';
import '../../css/d/ds69pvbkp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qk3eoukfo"/><path class="bstbd176c"/><path class="ds69pvbkp"/>`,
		"fallback": "selfhst:configarr",
	});
}

export default Component;
