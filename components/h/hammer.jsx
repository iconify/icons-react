import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uw4-4_bso.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uw4-4_bso"/>`,
		"fallback": "glyphs:hammer",
	});
}

export default Component;
