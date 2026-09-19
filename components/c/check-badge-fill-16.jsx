import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a_41vebwc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a_41vebwc"/>`,
		"fallback": "garden:check-badge-fill-16",
	});
}

export default Component;
