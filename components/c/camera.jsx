import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/y/yqwp33b_f.css';
import '../../css/m/mezodq4vs.css';
import '../../css/v/vr0thfpje.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="yqwp33b_f"/><rect class="mezodq4vs"/><path class="vr0thfpje"/></g>`,
		"fallback": "icon-park:camera",
	});
}

export default Component;
