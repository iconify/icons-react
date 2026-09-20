import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/au3h63b1s.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="au3h63b1s"/>`,
		"fallback": "teenyicons:gitlab-outline",
	});
}

export default Component;
