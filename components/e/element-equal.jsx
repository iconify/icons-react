import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/b0h64mbui.css';
import '../../css/c/cqaj_-bij.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="b0h64mbui"/><path class="cqaj_-bij"/></g>`,
		"fallback": "reicon:element-equal",
	});
}

export default Component;
