import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x5hrsgbgc.css';
import '../../css/n/nt4buzbis.css';
import '../../css/j/js3xanbeo.css';

const viewBox = {"width":1540,"height":1520};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x5hrsgbgc"/><path class="nt4buzbis"/><path class="js3xanbeo"/>`,
		"fallback": "thesvg-color:global-power-synergy",
	});
}

export default Component;
