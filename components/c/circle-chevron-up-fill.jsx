import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ii0ewyw5l.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ii0ewyw5l"/>`,
		"fallback": "gravity-ui:circle-chevron-up-fill",
	});
}

export default Component;
