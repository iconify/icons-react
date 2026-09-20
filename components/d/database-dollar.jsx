import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bgbi_bb4g.css';
import '../../css/e/e5v4m4wyp.css';
import '../../css/s/s2acebcee.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="bgbi_bb4g"/><path class="e5v4m4wyp"/><path class="s2acebcee"/></g>`,
		"fallback": "tabler:database-dollar",
	});
}

export default Component;
