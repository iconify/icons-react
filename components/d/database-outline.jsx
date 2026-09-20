import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/du4w56b8f.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="du4w56b8f"/>`,
		"fallback": "teenyicons:database-outline",
	});
}

export default Component;
