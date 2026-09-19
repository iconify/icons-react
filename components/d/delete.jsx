import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cm7dj77gr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cm7dj77gr"/>`,
		"fallback": "gravity-ui:delete",
	});
}

export default Component;
