import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/ge0wh-0qw.css';
import '../../css/u/ut5ih9blb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ge0wh-0qw"/><path class="ut5ih9blb"/></g>`,
		"fallback": "keyline-icons:bottle-two-tone",
	});
}

export default Component;
