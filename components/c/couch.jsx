import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x870m4u-x.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x870m4u-x"/>`,
		"fallback": "pinhead:couch",
	});
}

export default Component;
