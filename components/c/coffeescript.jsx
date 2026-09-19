import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jh0ih_lld.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jh0ih_lld"/>`,
		"fallback": "fontisto:coffeescript",
	});
}

export default Component;
