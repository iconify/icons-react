import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qbe3tm0cr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qbe3tm0cr"/>`,
		"fallback": "gravity-ui:file-xmark",
	});
}

export default Component;
