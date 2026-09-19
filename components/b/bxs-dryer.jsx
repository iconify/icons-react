import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kyv-fhcut.css';
import '../../css/j/jy-ypz30g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kyv-fhcut"/><path class="jy-ypz30g"/>`,
		"fallback": "bx:bxs-dryer",
	});
}

export default Component;
