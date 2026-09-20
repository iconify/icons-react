import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k21e98b0i.css';
import '../../css/k/kmwt16bbw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k21e98b0i"/><path class="kmwt16bbw"/></g>`,
		"fallback": "material-icon-theme:folder-bloc-open",
	});
}

export default Component;
