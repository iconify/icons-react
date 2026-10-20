import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gol2f3bbo.css';
import '../../css/v/vb5ivabjq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="gol2f3bbo"/><path class="vb5ivabjq"/></g>`,
		"fallback": "vadivam:hand-heart",
	});
}

export default Component;
