import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x__g1-fnw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x__g1-fnw"/>`,
		"fallback": "iconamoon:close-circle-1-fill",
	});
}

export default Component;
