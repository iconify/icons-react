import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b5k048lob.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b5k048lob"/>`,
		"fallback": "bi:filetype-wav",
	});
}

export default Component;
