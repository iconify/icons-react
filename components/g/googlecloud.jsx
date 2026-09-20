import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kxubckb9w.css';
import '../../css/n/nbl00ebkt.css';
import '../../css/w/wtyrvmbzc.css';
import '../../css/h/hr-360lqs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kxubckb9w"/><path class="nbl00ebkt"/><path class="wtyrvmbzc"/><path class="hr-360lqs"/>`,
		"fallback": "thesvg-color:googlecloud",
	});
}

export default Component;
