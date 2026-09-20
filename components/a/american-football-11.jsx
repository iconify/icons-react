import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bfdli4b8t.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bfdli4b8t"/>`,
		"fallback": "maki:american-football-11",
	});
}

export default Component;
