import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wr4vd1rvr.css';
import '../../css/k/k16_ngbvw.css';
import '../../css/v/vlj26f7td.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wr4vd1rvr"/><path class="k16_ngbvw"/><path class="vlj26f7td"/>`,
		"fallback": "energy-icons:folder-input-48",
	});
}

export default Component;
