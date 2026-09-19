import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/o/o3dhomb8m.css';
import '../../css/a/avk9c7bff.css';
import '../../css/a/a3x66k91v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="o3dhomb8m"/><path class="avk9c7bff"/><path class="a3x66k91v"/></g>`,
		"fallback": "icon-park:headwear",
	});
}

export default Component;
