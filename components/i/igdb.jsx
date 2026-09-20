import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oyl63ac_p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oyl63ac_p"/>`,
		"fallback": "thesvg-color:igdb",
	});
}

export default Component;
