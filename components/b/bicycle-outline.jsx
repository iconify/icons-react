import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o9ap423kz.css';
import '../../css/v/vwjfqbcke.css';
import '../../css/o/o6u87gbcd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o9ap423kz"/><path class="vwjfqbcke"/><path class="o6u87gbcd"/>`,
		"fallback": "famicons:bicycle-outline",
	});
}

export default Component;
