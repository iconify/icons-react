import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cul1c6h3i.css';
import '../../css/f/fs4phm_cn.css';
import '../../css/y/y7itsdbdv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cul1c6h3i"/><path class="fs4phm_cn"/><path class="y7itsdbdv"/></g>`,
		"fallback": "streamline-kameleon-color:coding-file-2-pop",
	});
}

export default Component;
