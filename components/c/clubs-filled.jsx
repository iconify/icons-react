import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yjgys6ave.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yjgys6ave"/>`,
		"fallback": "tabler:clubs-filled",
	});
}

export default Component;
