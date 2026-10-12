import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/eib6rbw3u.css';
import '../../css/c/cfiem4lux.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="eib6rbw3u"/><path class="cfiem4lux"/></g>`,
		"fallback": "andrsrxn:arrow-corner-up-right",
	});
}

export default Component;
