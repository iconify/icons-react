import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lmndnyfdt.css';
import '../../css/o/o-zauy34s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="lmndnyfdt"/><path class="o-zauy34s"/></g>`,
		"fallback": "tabler:git-pull-request-unlisted",
	});
}

export default Component;
