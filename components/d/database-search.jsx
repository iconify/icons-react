import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dxw2rj-de.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dxw2rj-de"/>`,
		"fallback": "vadivam:database-search",
	});
}

export default Component;
