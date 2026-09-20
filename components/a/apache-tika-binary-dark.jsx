import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lx0vdxm-f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lx0vdxm-f"/>`,
		"fallback": "selfhst:apache-tika-binary-dark",
	});
}

export default Component;
