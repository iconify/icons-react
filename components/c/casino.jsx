import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r_su40b-o.css';
import '../../css/a/a46a2oiqu.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r_su40b-o"/><path class="a46a2oiqu"/>`,
		"fallback": "temaki:casino",
	});
}

export default Component;
