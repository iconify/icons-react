import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/liaioib8y.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="liaioib8y"/>`,
		"fallback": "teenyicons:file-x-outline",
	});
}

export default Component;
