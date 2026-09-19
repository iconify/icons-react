import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bhth05buw.css';

const viewBox = {"width":896,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bhth05buw"/>`,
		"fallback": "whh:fontcomic",
	});
}

export default Component;
