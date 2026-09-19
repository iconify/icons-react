import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o-x0dsblc.css';
import '../../css/j/jyigv8bzh.css';
import '../../css/j/j7ox4ikmh.css';
import '../../css/u/uii4avzkv.css';
import '../../css/v/vtm294vds.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o-x0dsblc"/><circle class="jyigv8bzh"/><circle class="j7ox4ikmh"/><circle class="uii4avzkv"/><path class="vtm294vds"/>`,
		"fallback": "carbon:forecast-hail",
	});
}

export default Component;
