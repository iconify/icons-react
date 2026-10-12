import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r11vufb2b.css';
import '../../css/w/wzrtz78mz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r11vufb2b"/><path class="wzrtz78mz"/>`,
		"fallback": "energy-icons:banknote-20-bold",
	});
}

export default Component;
