import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b4vhhdiop.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b4vhhdiop"/>`,
		"fallback": "teenyicons:border-right-outline",
	});
}

export default Component;
