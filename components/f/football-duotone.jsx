import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w408ksbea.css';
import '../../css/g/g893x-ypb.css';
import '../../css/v/vte330b-f.css';
import '../../css/a/ai7aejrfo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="w408ksbea"/><g class="g893x-ypb"><path class="vte330b-f"/><path class="ai7aejrfo"/></g>`,
		"fallback": "stash:football-duotone",
	});
}

export default Component;
