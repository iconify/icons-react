import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mlgp2b63v.css';
import '../../css/x/x5yrrkbss.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mlgp2b63v"/><path class="x5yrrkbss"/>`,
		"fallback": "foundation:clipboard-notes",
	});
}

export default Component;
