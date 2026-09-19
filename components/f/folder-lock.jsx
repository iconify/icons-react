import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/j/jexdvubgo.css';
import '../../css/n/n81pev7yw.css';
import '../../css/t/t377omm9u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="jexdvubgo"/><rect class="n81pev7yw"/><path class="t377omm9u"/></g>`,
		"fallback": "icon-park:folder-lock",
	});
}

export default Component;
