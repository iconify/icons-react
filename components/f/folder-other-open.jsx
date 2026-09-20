import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vi9dt8sqd.css';
import '../../css/u/u2z5ne2ln.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vi9dt8sqd"/><path class="u2z5ne2ln"/>`,
		"fallback": "material-icon-theme:folder-other-open",
	});
}

export default Component;
