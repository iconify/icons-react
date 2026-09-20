import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u_e7a256j.css';
import '../../css/v/vs4phpb7z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u_e7a256j"/><path class="vs4phpb7z"/>`,
		"fallback": "selfhst:dynacat",
	});
}

export default Component;
