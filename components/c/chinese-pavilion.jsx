import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/m/m-2h1_bmo.css';
import '../../css/n/nc1sz7b8a.css';
import '../../css/h/hsozfkb8n.css';
import '../../css/y/y6b7sebkb.css';
import '../../css/l/lw0brenux.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="m-2h1_bmo"/><path class="nc1sz7b8a"/><path class="hsozfkb8n"/><path class="y6b7sebkb"/><rect class="lw0brenux"/></g>`,
		"fallback": "icon-park:chinese-pavilion",
	});
}

export default Component;
