import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b_e-ddbdl.css';
import '../../css/d/dj5rh1r0q.css';

const viewBox = {"width":324,"height":285.096};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b_e-ddbdl"/><path class="dj5rh1r0q"/>`,
		"fallback": "thesvg-color:eslint-dark",
	});
}

export default Component;
