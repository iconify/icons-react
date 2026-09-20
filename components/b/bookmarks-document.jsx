import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/agxpz7u6h.css';
import '../../css/u/unfowsxse.css';
import '../../css/v/vw6a_0v9g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="agxpz7u6h"/><path class="unfowsxse"/><path class="vw6a_0v9g"/>`,
		"fallback": "streamline-freehand:bookmarks-document",
	});
}

export default Component;
