import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lub4f059b.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lub4f059b"/>`,
		"fallback": "gravity-ui:code-pull-request-xmark",
	});
}

export default Component;
