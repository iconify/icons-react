import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xc2qibbax.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xc2qibbax"/>`,
		"fallback": "glyphs:h-4",
	});
}

export default Component;
