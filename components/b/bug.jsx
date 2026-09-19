import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h8v63iu0j.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h8v63iu0j"/>`,
		"fallback": "si-glyph:bug",
	});
}

export default Component;
