import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkilj4bin.css';
import '../../css/o/ogeeueq3y.css';
import '../../css/b/b-_qbabcf.css';
import '../../css/u/ud0albwsv.css';
import '../../css/h/hvs7j0bzj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dkilj4bin"/><path class="ogeeueq3y"/><path class="b-_qbabcf"/><path class="ud0albwsv"/><path class="hvs7j0bzj"/>`,
		"fallback": "energy-icons:desk-globe-20-bold",
	});
}

export default Component;
