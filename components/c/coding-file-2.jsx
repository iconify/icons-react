import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yjnn37b9t.css';
import '../../css/b/bmxce0kgv.css';
import '../../css/u/uq-1q_6dm.css';
import '../../css/g/gbyoqyb7w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yjnn37b9t"/><path class="bmxce0kgv"/><path class="uq-1q_6dm"/><path class="gbyoqyb7w"/></g>`,
		"fallback": "streamline-kameleon-color:coding-file-2",
	});
}

export default Component;
