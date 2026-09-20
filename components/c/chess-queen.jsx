import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/ivi_x117u.css';
import '../../css/n/npzbi206w.css';
import '../../css/m/m-2o9kbye.css';
import '../../css/p/pd4xfeb5q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="ivi_x117u"/><circle class="npzbi206w"/><circle class="m-2o9kbye"/><path class="pd4xfeb5q"/></g>`,
		"fallback": "meteor-icons:chess-queen",
	});
}

export default Component;
