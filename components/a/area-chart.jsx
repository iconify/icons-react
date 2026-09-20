import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkxa0gb4p.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dkxa0gb4p"/>`,
		"fallback": "uiw:area-chart",
	});
}

export default Component;
