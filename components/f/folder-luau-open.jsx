import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qa0d9wb7d.css';
import '../../css/v/vq4hkacez.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qa0d9wb7d"/><path clip-rule="evenodd" class="vq4hkacez"/></g>`,
		"fallback": "material-icon-theme:folder-luau-open",
	});
}

export default Component;
