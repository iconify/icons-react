import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/omnc04z9c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="omnc04z9c"/>`,
		"fallback": "ix:function-block-library",
	});
}

export default Component;
