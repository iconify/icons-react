import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u02ts_bkw.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u02ts_bkw"/>`,
		"fallback": "pinhead:hot-dog-with-mustard",
	});
}

export default Component;
