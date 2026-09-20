import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aprx8ebqb.css';
import '../../css/z/zi4rakb0b.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aprx8ebqb"/><path class="zi4rakb0b"/>`,
		"fallback": "material-icon-theme:folder-config-open",
	});
}

export default Component;
