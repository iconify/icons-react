import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/jn0ozac1d.css';
import '../../css/t/tywtgmbxl.css';
import '../../css/x/xviaohbjw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="jn0ozac1d"/><path class="tywtgmbxl"/><path class="xviaohbjw"/></g>`,
		"fallback": "withicons-bauhaus:file-warning",
	});
}

export default Component;
