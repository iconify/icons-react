import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x5l1xgljl.css';
import '../../css/e/ec-xsg-ku.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x5l1xgljl"/><path class="ec-xsg-ku"/>`,
		"fallback": "token:cgt",
	});
}

export default Component;
