import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/spfx0y4sg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="spfx0y4sg"/>`,
		"fallback": "tdesign:chevron-down",
	});
}

export default Component;
