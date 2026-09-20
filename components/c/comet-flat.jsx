import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/izkd0eb1a.css';
import '../../css/m/m648hmzop.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="izkd0eb1a"/><path class="m648hmzop"/></g>`,
		"fallback": "streamline-color:comet-flat",
	});
}

export default Component;
