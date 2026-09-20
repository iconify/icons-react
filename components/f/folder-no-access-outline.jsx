import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/by7nze-ud.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="by7nze-ud"/>`,
		"fallback": "teenyicons:folder-no-access-outline",
	});
}

export default Component;
