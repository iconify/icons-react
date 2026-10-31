import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pbev39b6a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pbev39b6a"/>`,
		"fallback": "coolicons:bluetooth-duotone-round",
	});
}

export default Component;
