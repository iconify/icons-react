import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h973_tgep.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h973_tgep"/>`,
		"fallback": "gravity-ui:circle-letter-w",
	});
}

export default Component;
