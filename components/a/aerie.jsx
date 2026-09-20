import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v18hzdb8f.css';
import '../../css/d/d0u33jbdc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="v18hzdb8f"/><path class="d0u33jbdc"/>`,
		"fallback": "selfhst:aerie",
	});
}

export default Component;
