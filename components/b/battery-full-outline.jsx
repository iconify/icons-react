import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xjpbc1c8o.css';
import '../../css/m/mthptgvbg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xjpbc1c8o"/><path clip-rule="evenodd" class="mthptgvbg"/>`,
		"fallback": "basil:battery-full-outline",
	});
}

export default Component;
