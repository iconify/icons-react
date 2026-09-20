import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ra3zzfhcd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ra3zzfhcd"/>`,
		"fallback": "mingcute:finger-victory-line",
	});
}

export default Component;
