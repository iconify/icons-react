import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gpk98bbzf.css';
import '../../css/a/aekvfuqpv.css';
import '../../css/o/o6vxk8b3w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gpk98bbzf"/><path class="aekvfuqpv"/><path class="o6vxk8b3w"/>`,
		"fallback": "selfhst:framadate",
	});
}

export default Component;
