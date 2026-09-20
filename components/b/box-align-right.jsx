import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vqbx91-km.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vqbx91-km"/>`,
		"fallback": "tabler:box-align-right",
	});
}

export default Component;
