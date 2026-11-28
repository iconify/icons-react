import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r_1qmdbld.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r_1qmdbld"/>`,
		"fallback": "noviair:archive-x",
	});
}

export default Component;
