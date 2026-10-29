import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u-h4btj8y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u-h4btj8y"/>`,
		"fallback": "withicons:avatar-cat-solid",
	});
}

export default Component;
