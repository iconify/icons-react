import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dzwc3wbtr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dzwc3wbtr"/>`,
		"fallback": "ix:couch",
	});
}

export default Component;
