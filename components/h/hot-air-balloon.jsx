import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g4uc9vb-s.css';
import '../../css/u/u7e-84bzp.css';

const viewBox = {"width":19,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g4uc9vb-s"/><path class="u7e-84bzp"/>`,
		"fallback": "fontisto:hot-air-balloon",
	});
}

export default Component;
