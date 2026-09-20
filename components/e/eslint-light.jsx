import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bm0dn2bvw.css';
import '../../css/v/vhsa93b5g.css';

const viewBox = {"width":324,"height":285.096};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bm0dn2bvw"/><path class="vhsa93b5g"/>`,
		"fallback": "thesvg-color:eslint-light",
	});
}

export default Component;
