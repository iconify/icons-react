import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/acshywbnn.css';
import '../../css/w/wgtpkgbyk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="acshywbnn"/><path class="wgtpkgbyk"/></g>`,
		"fallback": "fluent-emoji-flat:backhand-index-pointing-left",
	});
}

export default Component;
