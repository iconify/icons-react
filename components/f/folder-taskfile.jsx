import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ib3jzhgvb.css';
import '../../css/d/debdggzbs.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ib3jzhgvb"/><path class="debdggzbs"/>`,
		"fallback": "material-icon-theme:folder-taskfile",
	});
}

export default Component;
