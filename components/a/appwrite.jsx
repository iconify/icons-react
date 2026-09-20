import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h7bh2fp3f.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h7bh2fp3f"/>`,
		"fallback": "material-icon-theme:appwrite",
	});
}

export default Component;
