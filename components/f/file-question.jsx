import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k3lmh7etc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="k3lmh7etc"/>`,
		"fallback": "gravity-ui:file-question",
	});
}

export default Component;
