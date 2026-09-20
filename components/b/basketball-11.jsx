import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mk1ggacie.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mk1ggacie"/>`,
		"fallback": "maki:basketball-11",
	});
}

export default Component;
