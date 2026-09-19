import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lcj7d6fkm.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lcj7d6fkm"/>`,
		"fallback": "glyphs:arrows-cross",
	});
}

export default Component;
