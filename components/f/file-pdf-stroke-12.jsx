import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lou9a14vc.css';
import '../../css/j/j2bufmatg.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lou9a14vc"/><rect class="j2bufmatg"/>`,
		"fallback": "garden:file-pdf-stroke-12",
	});
}

export default Component;
