import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i6ncrbthp.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i6ncrbthp"/>`,
		"fallback": "fluent-mdl2:check-list-check-mirrored",
	});
}

export default Component;
