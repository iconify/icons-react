import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/y/y6f0jibvm.css';
import '../../css/t/tr-zhmy5m.css';
import '../../css/y/ygcb8z_zu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="y6f0jibvm"/><path class="tr-zhmy5m"/><path class="ygcb8z_zu"/></g>`,
		"fallback": "icon-park:circle-double-left",
	});
}

export default Component;
