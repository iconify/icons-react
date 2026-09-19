import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cxv08ik5f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cxv08ik5f"/>`,
		"fallback": "fontisto:genderless",
	});
}

export default Component;
