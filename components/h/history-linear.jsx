import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/kk45u3h5t.css';
import '../../css/v/v822nacbe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="kk45u3h5t"/><path class="v822nacbe"/></g>`,
		"fallback": "solar:history-linear",
	});
}

export default Component;
