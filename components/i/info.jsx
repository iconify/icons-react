import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/s/shu3xdl9q.css';
import '../../css/b/bvrwuwbna.css';
import '../../css/p/p8jpuzj3c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><circle class="shu3xdl9q"/><path class="bvrwuwbna"/><path class="p8jpuzj3c"/></g>`,
		"fallback": "akar-icons:info",
	});
}

export default Component;
