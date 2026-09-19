import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/j/jy7x6zb6o.css';
import '../../css/w/wd0nr7boa.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="jy7x6zb6o"/><path class="wd0nr7boa"/></g>`,
		"fallback": "icon-park:folder-minus",
	});
}

export default Component;
