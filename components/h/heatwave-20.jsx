import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x6zve7bwi.css';
import '../../css/k/ku1wiibua.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x6zve7bwi"/><path class="ku1wiibua"/>`,
		"fallback": "energy-icons:heatwave-20",
	});
}

export default Component;
