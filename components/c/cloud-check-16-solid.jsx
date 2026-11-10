import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nm_-n8-nm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nm_-n8-nm"/>`,
		"fallback": "sidekickicons:cloud-check-16-solid",
	});
}

export default Component;
