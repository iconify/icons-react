import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/imx_s_bes.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="imx_s_bes"/>`,
		"fallback": "at-icons:filter",
	});
}

export default Component;
