import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/t5y1r5fnn.css';
import '../../css/o/o9v78wbjd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="t5y1r5fnn"/><path class="o9v78wbjd"/></g>`,
		"fallback": "streamline-ultimate:beer-opener",
	});
}

export default Component;
