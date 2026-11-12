import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hlrqbuf5m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hlrqbuf5m"/>`,
		"fallback": "tabler:calendar-spark",
	});
}

export default Component;
