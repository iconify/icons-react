import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o2o_zuh-l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o2o_zuh-l"/>`,
		"fallback": "hugeicons:cursor-circle-selection-01",
	});
}

export default Component;
