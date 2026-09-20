import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/niel_0bjf.css';
import '../../css/v/v062odbys.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="niel_0bjf"/><path clip-rule="evenodd" class="v062odbys"/></g>`,
		"fallback": "streamline-plump-color:feather-pen-flat",
	});
}

export default Component;
