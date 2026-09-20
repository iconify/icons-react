import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gwu5y9wqa.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gwu5y9wqa"/>`,
		"fallback": "teenyicons:flag-solid",
	});
}

export default Component;
