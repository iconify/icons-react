import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lftzenblg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lftzenblg"/>`,
		"fallback": "simple-icons:cloud66",
	});
}

export default Component;
