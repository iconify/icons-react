import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wtd2nibfk.css';
import '../../css/u/u51oq8zre.css';
import '../../css/a/au75f-bww.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="wtd2nibfk"/><path class="u51oq8zre"/><path class="au75f-bww"/></g>`,
		"fallback": "tabler:cake-roll",
	});
}

export default Component;
