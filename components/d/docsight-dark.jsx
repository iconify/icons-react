import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xvjyobsxa.css';
import '../../css/m/mdf334osa.css';
import '../../css/n/ng8zrebtc.css';
import '../../css/k/k565abc4m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xvjyobsxa"/><path class="mdf334osa"/><path class="ng8zrebtc"/><circle class="k565abc4m"/>`,
		"fallback": "selfhst:docsight-dark",
	});
}

export default Component;
