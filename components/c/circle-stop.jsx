import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yc48rr7mb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yc48rr7mb"/>`,
		"fallback": "gravity-ui:circle-stop",
	});
}

export default Component;
