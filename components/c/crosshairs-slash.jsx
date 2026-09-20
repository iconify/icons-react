import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/cz9rkkbgh.css';
import '../../css/i/i8np18btt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="cz9rkkbgh"/><path class="i8np18btt"/></g>`,
		"fallback": "reicon:crosshairs-slash",
	});
}

export default Component;
