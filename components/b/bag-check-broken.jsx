import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/r534utb4b.css';
import '../../css/s/sr5bgubyr.css';
import '../../css/v/v77ej-64o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="r534utb4b"/><path class="sr5bgubyr"/><path class="v77ej-64o"/></g>`,
		"fallback": "solar:bag-check-broken",
	});
}

export default Component;
