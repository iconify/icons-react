import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/thk9tudjp.css';
import '../../css/n/ni5juab4k.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="thk9tudjp"/><path class="ni5juab4k"/>`,
		"fallback": "material-icon-theme:folder-zed",
	});
}

export default Component;
