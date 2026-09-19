import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bq34y74ct.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bq34y74ct"/>`,
		"fallback": "devicon-plain:hadoop",
	});
}

export default Component;
