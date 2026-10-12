import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yw3xaacjo.css';
import '../../css/y/ykstnuplu.css';
import '../../css/z/z7vmyx0jp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yw3xaacjo"/><path class="ykstnuplu"/><path class="z7vmyx0jp"/>`,
		"fallback": "energy-icons:arrow-circle-right-20",
	});
}

export default Component;
