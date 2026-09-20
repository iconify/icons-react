import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vctvmtjcb.css';
import '../../css/a/a6eo7ib1a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vctvmtjcb"/><path class="a6eo7ib1a"/>`,
		"fallback": "selfhst:dynamodb-dashboard",
	});
}

export default Component;
