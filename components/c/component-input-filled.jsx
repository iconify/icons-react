import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jqne-81aw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jqne-81aw"/>`,
		"fallback": "tdesign:component-input-filled",
	});
}

export default Component;
