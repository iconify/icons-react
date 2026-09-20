import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/h1q6dub3m.css';
import '../../css/c/c22ax233i.css';
import '../../css/b/baplkacpw.css';
import '../../css/l/lg1zcpg4d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="h1q6dub3m"/><path class="c22ax233i"/><path class="baplkacpw"/><path class="lg1zcpg4d"/></g>`,
		"fallback": "solar:corkscrew-broken",
	});
}

export default Component;
