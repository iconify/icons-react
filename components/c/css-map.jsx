import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gyqzsr44f.css';
import '../../css/e/evgip2bmd.css';
import '../../css/e/e8wgpct6m.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gyqzsr44f"/><path class="evgip2bmd"/><path class="e8wgpct6m"/>`,
		"fallback": "material-icon-theme:css-map",
	});
}

export default Component;
