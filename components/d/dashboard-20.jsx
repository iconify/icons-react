import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zyrpv8pvm.css';
import '../../css/o/o8g693dbn.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zyrpv8pvm"/><path class="o8g693dbn"/>`,
		"fallback": "energy-icons:dashboard-20",
	});
}

export default Component;
