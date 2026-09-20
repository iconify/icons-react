import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t78rjtomt.css';
import '../../css/h/hn34necwq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t78rjtomt"/><path class="hn34necwq"/>`,
		"fallback": "material-icon-theme:css",
	});
}

export default Component;
