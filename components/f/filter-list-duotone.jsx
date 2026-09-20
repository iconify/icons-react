import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uk10n7b8p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uk10n7b8p"/>`,
		"fallback": "si:filter-list-duotone",
	});
}

export default Component;
