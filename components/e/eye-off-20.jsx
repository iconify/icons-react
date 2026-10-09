import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bvltjac2r.css';
import '../../css/f/fbhmvz7nk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bvltjac2r"/><path class="fbhmvz7nk"/>`,
		"fallback": "energy-icons:eye-off-20",
	});
}

export default Component;
