import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/bofrjubrr.css';
import '../../css/w/wq29_tbln.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="bofrjubrr"/><path class="wq29_tbln"/></g>`,
		"fallback": "mage:gem-c",
	});
}

export default Component;
