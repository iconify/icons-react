import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/e7xx3gbgc.css';
import '../../css/l/l37xwkbme.css';
import '../../css/f/fhjxnntel.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="e7xx3gbgc"/><path class="l37xwkbme"/><path class="fhjxnntel"/></g>`,
		"fallback": "streamline-ultimate:funny-mask",
	});
}

export default Component;
