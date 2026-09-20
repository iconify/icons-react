import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l5kwrbb7y.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l5kwrbb7y"/>`,
		"fallback": "teenyicons:brush-outline",
	});
}

export default Component;
