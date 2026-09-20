import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bk-c65bsz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bk-c65bsz"/>`,
		"fallback": "reicon:buildings",
	});
}

export default Component;
