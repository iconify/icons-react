import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rqof30ala.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rqof30ala"/>`,
		"fallback": "teenyicons:align-left-outline",
	});
}

export default Component;
