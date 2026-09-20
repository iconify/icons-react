import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oiyw48fhn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="oiyw48fhn"/>`,
		"fallback": "reicon:doc",
	});
}

export default Component;
