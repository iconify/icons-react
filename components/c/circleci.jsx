import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cr_qps3yf.css';
import '../../css/e/ey6kym17a.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="cr_qps3yf"/><path class="ey6kym17a"/>`,
		"fallback": "material-icon-theme:circleci",
	});
}

export default Component;
