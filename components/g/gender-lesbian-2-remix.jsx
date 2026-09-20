import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rsk20ca5m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rsk20ca5m"/>`,
		"fallback": "streamline-sharp:gender-lesbian-2-remix",
	});
}

export default Component;
