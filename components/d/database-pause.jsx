import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j1u9eup1x.css';
import '../../css/w/wrxawemde.css';
import '../../css/k/kxtwnwl1l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="j1u9eup1x"/><path class="wrxawemde"/><path class="kxtwnwl1l"/></g>`,
		"fallback": "tabler:database-pause",
	});
}

export default Component;
