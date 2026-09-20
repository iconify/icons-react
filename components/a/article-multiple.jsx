import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/atzb4gb8y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="atzb4gb8y"/>`,
		"fallback": "pixelarticons:article-multiple",
	});
}

export default Component;
