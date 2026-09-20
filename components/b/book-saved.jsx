import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/elh5buhne.css';
import '../../css/s/sw58sgb7q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="elh5buhne"/><path class="sw58sgb7q"/></g>`,
		"fallback": "reicon:book-saved",
	});
}

export default Component;
