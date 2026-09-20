import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l57u97ban.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l57u97ban"/>`,
		"fallback": "simple-icons:crunchbase",
	});
}

export default Component;
