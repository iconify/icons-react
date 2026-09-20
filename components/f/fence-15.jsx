import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a-czs3bec.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a-czs3bec"/>`,
		"fallback": "maki:fence-15",
	});
}

export default Component;
