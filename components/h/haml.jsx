import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kx0qcbuxw.css';

const viewBox = {"width":300,"height":300};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kx0qcbuxw"/>`,
		"fallback": "material-icon-theme:haml",
	});
}

export default Component;
