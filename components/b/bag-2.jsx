import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xguru3hwn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xguru3hwn"/>`,
		"fallback": "reicon:bag-2",
	});
}

export default Component;
