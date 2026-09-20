import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ghtj-5rid.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ghtj-5rid"/>`,
		"fallback": "reicon:coins",
	});
}

export default Component;
