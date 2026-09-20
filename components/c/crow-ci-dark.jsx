import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y7yjv0aal.css';
import '../../css/g/g--_bbc2c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y7yjv0aal"/><path class="g--_bbc2c"/>`,
		"fallback": "selfhst:crow-ci-dark",
	});
}

export default Component;
