import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ty5wgbcxn.css';
import '../../css/d/di8rvibxo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ty5wgbcxn"/><path class="di8rvibxo"/>`,
		"fallback": "boxicons:car-key",
	});
}

export default Component;
