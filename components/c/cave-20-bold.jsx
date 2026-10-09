import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fw792fgla.css';
import '../../css/d/dq1tynbis.css';
import '../../css/a/ale17-bkw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fw792fgla"/><path class="dq1tynbis"/><path class="ale17-bkw"/>`,
		"fallback": "energy-icons:cave-20-bold",
	});
}

export default Component;
