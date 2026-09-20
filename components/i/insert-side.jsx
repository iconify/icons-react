import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zikyyou9f.css';
import '../../css/g/gex58obqu.css';
import '../../css/t/tgdijsakh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zikyyou9f"/><path class="gex58obqu"/><path class="tgdijsakh"/></g>`,
		"fallback": "streamline-color:insert-side",
	});
}

export default Component;
