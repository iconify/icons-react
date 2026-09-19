import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/vezqu9bki.css';
import '../../css/g/gofpqh03b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="vezqu9bki"/><path class="gofpqh03b"/></g>`,
		"fallback": "iconoir:center-align-solid",
	});
}

export default Component;
