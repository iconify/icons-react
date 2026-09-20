import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jzicu7o9n.css';
import '../../css/o/o962okb9s.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jzicu7o9n"/><path class="o962okb9s"/>`,
		"fallback": "material-icon-theme:folder-images-open",
	});
}

export default Component;
