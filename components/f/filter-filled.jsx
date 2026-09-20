import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/utxk3l1jo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="utxk3l1jo"/>`,
		"fallback": "reicon:filter-filled",
	});
}

export default Component;
