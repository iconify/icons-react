import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jb8vcux9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jb8vcux9f"/>`,
		"fallback": "vadivam:file-search-corner",
	});
}

export default Component;
