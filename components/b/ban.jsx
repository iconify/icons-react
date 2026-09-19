import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ai7aleert.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ai7aleert"/>`,
		"fallback": "gravity-ui:ban",
	});
}

export default Component;
