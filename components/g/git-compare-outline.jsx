import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rbvcw8bkn.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rbvcw8bkn"/>`,
		"fallback": "teenyicons:git-compare-outline",
	});
}

export default Component;
