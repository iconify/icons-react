import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zuim5fb4m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zuim5fb4m"/>`,
		"fallback": "tabler:gender-demiboy",
	});
}

export default Component;
