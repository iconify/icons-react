import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cci33jb9i.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cci33jb9i"/>`,
		"fallback": "whh:comment",
	});
}

export default Component;
