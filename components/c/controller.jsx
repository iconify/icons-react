import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gfx94ekeo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gfx94ekeo"/>`,
		"fallback": "mynaui:controller",
	});
}

export default Component;
