import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ilowjdbfq.css';
import '../../css/b/bub42fbya.css';
import '../../css/g/gc0jj5bbl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ilowjdbfq"/><path class="bub42fbya"/><path class="gc0jj5bbl"/>`,
		"fallback": "withicons-bauhaus:ice-cream",
	});
}

export default Component;
