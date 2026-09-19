import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bv_oq7_es.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bv_oq7_es"/>`,
		"fallback": "icon-park-outline:app-switch",
	});
}

export default Component;
