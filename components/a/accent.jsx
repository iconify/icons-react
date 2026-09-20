import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bbrbmsbty.css';
import '../../css/v/val4s82hw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="bbrbmsbty"/><path class="val4s82hw"/>`,
		"fallback": "selfhst:accent",
	});
}

export default Component;
