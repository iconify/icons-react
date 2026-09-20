import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/ww6kmx10n.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ww6kmx10n"/>`,
		"fallback": "maki:art-gallery-15",
	});
}

export default Component;
