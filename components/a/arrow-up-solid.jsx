import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ohewd5--p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ohewd5--p"/>`,
		"fallback": "stash:arrow-up-solid",
	});
}

export default Component;
