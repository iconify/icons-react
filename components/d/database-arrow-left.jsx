import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uy1qikb7g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uy1qikb7g"/>`,
		"fallback": "mdi:database-arrow-left",
	});
}

export default Component;
