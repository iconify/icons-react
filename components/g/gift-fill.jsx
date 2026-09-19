import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/acv3zackm.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="acv3zackm"/>`,
		"fallback": "f7:gift-fill",
	});
}

export default Component;
