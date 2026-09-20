import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v5xb6efyw.css';
import '../../css/h/hxjqz7bii.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v5xb6efyw"/><path class="hxjqz7bii"/>`,
		"fallback": "selfhst:bandcamp",
	});
}

export default Component;
