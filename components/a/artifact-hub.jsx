import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d7op48boq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d7op48boq"/>`,
		"fallback": "thesvg:artifact-hub",
	});
}

export default Component;
