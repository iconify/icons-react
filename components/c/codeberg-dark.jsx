import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rnqpocbhp.css';
import '../../css/m/m36y1-ioy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rnqpocbhp"/><path class="m36y1-ioy"/>`,
		"fallback": "selfhst:codeberg-dark",
	});
}

export default Component;
