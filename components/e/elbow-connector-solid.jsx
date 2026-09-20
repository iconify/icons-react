import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hvr_ly5gu.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hvr_ly5gu"/>`,
		"fallback": "teenyicons:elbow-connector-solid",
	});
}

export default Component;
