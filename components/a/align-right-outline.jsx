import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tap2fcboc.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tap2fcboc"/>`,
		"fallback": "teenyicons:align-right-outline",
	});
}

export default Component;
