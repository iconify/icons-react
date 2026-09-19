import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b44s31boi.css';

const viewBox = {"width":464,"height":488};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b44s31boi"/>`,
		"fallback": "ps:blogger",
	});
}

export default Component;
