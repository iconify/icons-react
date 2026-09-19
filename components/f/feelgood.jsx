import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/z/zvr7xsb7x.css';
import '../../css/c/cr62cjb1u.css';
import '../../css/l/llieu-bxr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="zvr7xsb7x"/><path class="cr62cjb1u"/><path class="llieu-bxr"/></g>`,
		"fallback": "icon-park:feelgood",
	});
}

export default Component;
