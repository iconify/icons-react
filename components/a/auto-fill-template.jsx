import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ei2v52zpf.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ei2v52zpf"/>`,
		"fallback": "fluent-mdl2:auto-fill-template",
	});
}

export default Component;
