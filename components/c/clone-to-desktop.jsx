import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zb-nc6b2z.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zb-nc6b2z"/>`,
		"fallback": "fluent-mdl2:clone-to-desktop",
	});
}

export default Component;
