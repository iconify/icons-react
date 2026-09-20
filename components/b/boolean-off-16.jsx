import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g37t12bqh.css';
import '../../css/y/yclss2c2g.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g37t12bqh"/><path class="yclss2c2g"/>`,
		"fallback": "octicon:boolean-off-16",
	});
}

export default Component;
