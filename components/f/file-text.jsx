import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/glntgibhg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="glntgibhg"/>`,
		"fallback": "gravity-ui:file-text",
	});
}

export default Component;
