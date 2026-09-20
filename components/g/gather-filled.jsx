import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u8g12lbzw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u8g12lbzw"/>`,
		"fallback": "lsicon:gather-filled",
	});
}

export default Component;
