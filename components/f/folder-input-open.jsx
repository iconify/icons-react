import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/up2j63u8p.css';
import '../../css/g/gwo484bfx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="up2j63u8p"/><path class="gwo484bfx"/>`,
		"fallback": "material-icon-theme:folder-input-open",
	});
}

export default Component;
