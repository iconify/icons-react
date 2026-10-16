import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kimfu9q5t.css';
import '../../css/p/p_z32__tj.css';
import '../../css/a/an10mdq2o.css';
import '../../css/v/vl729ybrf.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kimfu9q5t"/><path class="p_z32__tj"/><path class="an10mdq2o"/><path class="vl729ybrf"/>`,
		"fallback": "energy-icons:file-spreadsheet-20",
	});
}

export default Component;
