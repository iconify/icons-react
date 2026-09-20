import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z0djsxb9c.css';
import '../../css/d/dplt1qi1x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z0djsxb9c"/><path class="dplt1qi1x"/>`,
		"fallback": "material-icon-theme:folder-include-open",
	});
}

export default Component;
