import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/swoo4rbsl.css';
import '../../css/u/ukyr80b4m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="swoo4rbsl"/><path class="ukyr80b4m"/>`,
		"fallback": "pixel:cassette-tape-solid",
	});
}

export default Component;
