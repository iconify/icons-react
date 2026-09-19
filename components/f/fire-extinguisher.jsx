import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cmc7hu2bo.css';
import '../../css/j/jpbl_guwj.css';
import '../../css/s/s-wrx8p7w.css';
import '../../css/a/ahsoxf_7b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cmc7hu2bo"/><path class="jpbl_guwj"/><path class="s-wrx8p7w"/><circle class="ahsoxf_7b"/></g>`,
		"fallback": "icon-park-outline:fire-extinguisher",
	});
}

export default Component;
