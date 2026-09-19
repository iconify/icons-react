import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bq1no1b7x.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bq1no1b7x"/>`,
		"fallback": "glyphs:b-outline",
	});
}

export default Component;
