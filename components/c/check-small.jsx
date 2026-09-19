import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fs_zsqy5c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fs_zsqy5c"/>`,
		"fallback": "icon-park:check-small",
	});
}

export default Component;
