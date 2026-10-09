import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d-g74icta.css';
import '../../css/p/pizowmb7j.css';
import '../../css/h/hivi6dbpq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d-g74icta"/><path class="pizowmb7j"/><path class="hivi6dbpq"/>`,
		"fallback": "energy-icons:file-plus-20",
	});
}

export default Component;
