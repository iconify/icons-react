import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hgci3mbpj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hgci3mbpj"/>`,
		"fallback": "fontisto:close-a",
	});
}

export default Component;
