import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jbd9w3y-h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jbd9w3y-h"/>`,
		"fallback": "sidekickicons:cloud-slash-solid",
	});
}

export default Component;
