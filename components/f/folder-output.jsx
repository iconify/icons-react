import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/q64lg9bgz.css';
import '../../css/a/aedi4eb1g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="q64lg9bgz"/><path class="aedi4eb1g"/></g>`,
		"fallback": "lucide:folder-output",
	});
}

export default Component;
