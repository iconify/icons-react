import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/epoweac4s.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="epoweac4s"/>`,
		"fallback": "gravity-ui:dice-1",
	});
}

export default Component;
