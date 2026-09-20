import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gahb4hlyw.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gahb4hlyw"/>`,
		"fallback": "temaki:gondola-lift",
	});
}

export default Component;
