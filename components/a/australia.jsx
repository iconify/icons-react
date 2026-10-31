import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yl8x224tx.css';
import '../../css/w/ww52sv46j.css';
import '../../css/n/nv4ztabcc.css';
import '../../css/o/o6rwwebbc.css';
import '../../css/u/ufzh-1jpi.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yl8x224tx"/><path class="ww52sv46j"/><path class="nv4ztabcc"/><path class="o6rwwebbc"/><path class="ufzh-1jpi"/>`,
		"fallback": "tabler-flags:australia",
	});
}

export default Component;
