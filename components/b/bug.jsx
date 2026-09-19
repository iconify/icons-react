import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x9ye_f-yi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x9ye_f-yi"/>`,
		"fallback": "fa6-solid:bug",
	});
}

export default Component;
