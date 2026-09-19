import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dxc2vnb9a.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dxc2vnb9a"/>`,
		"fallback": "glyphs:border-inner-outline",
	});
}

export default Component;
