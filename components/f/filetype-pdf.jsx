import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/otla8nb3s.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="otla8nb3s"/>`,
		"fallback": "bi:filetype-pdf",
	});
}

export default Component;
