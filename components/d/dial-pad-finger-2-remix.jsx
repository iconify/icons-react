import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tljagjowm.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tljagjowm"/>`,
		"fallback": "streamline-flex:dial-pad-finger-2-remix",
	});
}

export default Component;
