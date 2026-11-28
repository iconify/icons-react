import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dyn0hrb9a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dyn0hrb9a"/>`,
		"fallback": "noviair:database-lock",
	});
}

export default Component;
