import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gsv5h1yxl.css';
import '../../css/r/r67i5vbwt.css';
import '../../css/f/f2v26bkcw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gsv5h1yxl"/><path class="r67i5vbwt"/><path class="f2v26bkcw"/>`,
		"fallback": "energy-icons:ev-charger-home-48-bold",
	});
}

export default Component;
