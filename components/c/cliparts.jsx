import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/vuwlpvp2m.css';
import '../../css/d/dj37ziz5e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="vuwlpvp2m"/><path class="dj37ziz5e"/></g>`,
		"fallback": "hugeicons:cliparts",
	});
}

export default Component;
