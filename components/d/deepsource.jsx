import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g7veribva.css';
import '../../css/b/bpjvsabdv.css';
import '../../css/k/koxyqebxp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g7veribva"/><path class="bpjvsabdv"/><path class="koxyqebxp"/>`,
		"fallback": "material-icon-theme:deepsource",
	});
}

export default Component;
