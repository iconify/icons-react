import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/iff0bs3cv.css';
import '../../css/o/o2fc5ib8x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="iff0bs3cv"/><path class="o2fc5ib8x"/></g>`,
		"fallback": "streamline-ultimate:dentistry-tooth-shield",
	});
}

export default Component;
