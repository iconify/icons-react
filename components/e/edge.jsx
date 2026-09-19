import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jks7n9fgq.css';

const viewBox = {"width":22,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jks7n9fgq"/>`,
		"fallback": "fontisto:edge",
	});
}

export default Component;
