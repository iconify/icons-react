import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/ui5u5ho9x.css';
import '../../css/e/e7blyebkj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ui5u5ho9x"/><path class="e7blyebkj"/></g>`,
		"fallback": "tabler:ghost-off",
	});
}

export default Component;
