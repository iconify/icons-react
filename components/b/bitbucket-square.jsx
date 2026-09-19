import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b568kobcq.css';

const viewBox = {"width":1536,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b568kobcq"/>`,
		"fallback": "fa:bitbucket-square",
	});
}

export default Component;
