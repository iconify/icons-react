import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uyoyz9ojw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uyoyz9ojw"/>`,
		"fallback": "reicon:book-bookmark",
	});
}

export default Component;
