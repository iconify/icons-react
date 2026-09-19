import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/b/bcy9hon0d.css';
import '../../css/e/etn6etlwz.css';
import '../../css/h/h-79xibwu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="bcy9hon0d"/><path class="etn6etlwz"/><path class="h-79xibwu"/></g>`,
		"fallback": "hugeicons:equipment-gym-02",
	});
}

export default Component;
