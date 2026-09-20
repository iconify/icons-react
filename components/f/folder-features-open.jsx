import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qr8flrbjb.css';
import '../../css/x/xwttrnwcp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qr8flrbjb"/><path class="xwttrnwcp"/></g>`,
		"fallback": "material-icon-theme:folder-features-open",
	});
}

export default Component;
