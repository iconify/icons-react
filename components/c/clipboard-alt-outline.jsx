import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nvuvw1xmg.css';
import '../../css/d/d8pcrprmp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nvuvw1xmg"/><path class="d8pcrprmp"/>`,
		"fallback": "basil:clipboard-alt-outline",
	});
}

export default Component;
