import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/x5alcsbwc.css';
import '../../css/b/b5pj584wn.css';
import '../../css/z/znnta9z6s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="x5alcsbwc"/><path class="b5pj584wn"/><path class="znnta9z6s"/></g>`,
		"fallback": "streamline-ultimate:instrument-pan-flute",
	});
}

export default Component;
