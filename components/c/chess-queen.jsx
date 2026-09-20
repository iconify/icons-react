import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/ssmkz5zlu.css';
import '../../css/n/npzbi206w.css';
import '../../css/m/m-2o9kbye.css';
import '../../css/i/ivi_x117u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ssmkz5zlu"/><circle class="npzbi206w"/><circle class="m-2o9kbye"/><circle class="ivi_x117u"/></g>`,
		"fallback": "lucide:chess-queen",
	});
}

export default Component;
