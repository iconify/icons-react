import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bhh83vb7u.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bhh83vb7u"/>`,
		"fallback": "gravity-ui:file-arrow-up",
	});
}

export default Component;
