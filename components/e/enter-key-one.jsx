import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/o/oz97y6bsr.css';
import '../../css/d/dcgcy_8ex.css';
import '../../css/y/ym3miobeb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="oz97y6bsr"/><path class="dcgcy_8ex"/><path class="ym3miobeb"/></g>`,
		"fallback": "icon-park:enter-key-one",
	});
}

export default Component;
