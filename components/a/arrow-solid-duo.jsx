import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ix_37863o.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ix_37863o"/>`,
		"fallback": "glyphs:arrow-solid-duo",
	});
}

export default Component;
