import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/un_rqmbfz.css';
import '../../css/j/ju2zpyrzh.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="un_rqmbfz"/><circle class="ju2zpyrzh"/>`,
		"fallback": "lineicons:information",
	});
}

export default Component;
