import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/up2j63u8p.css';
import '../../css/c/cl9xofbwx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="up2j63u8p"/><path class="cl9xofbwx"/>`,
		"fallback": "material-icon-theme:folder-go-open",
	});
}

export default Component;
