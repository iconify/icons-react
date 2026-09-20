import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lbv2lgbdb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lbv2lgbdb"/>`,
		"fallback": "thesvg-color:creality",
	});
}

export default Component;
