import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/fc625cbqw.css';
import '../../css/t/tdf2ro1sx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="fc625cbqw"/><path class="tdf2ro1sx"/></g>`,
		"fallback": "reicon:camera-slash",
	});
}

export default Component;
