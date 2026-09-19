import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u8veo69iz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u8veo69iz"/>`,
		"fallback": "gravity-ui:file-arrow-right-out",
	});
}

export default Component;
