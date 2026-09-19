import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u0s5l9few.css';
import '../../css/y/ywghsebrp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u0s5l9few"/><path class="ywghsebrp"/>`,
		"fallback": "grommet-icons:google",
	});
}

export default Component;
