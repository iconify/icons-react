import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/irx4tpg6l.css';
import '../../css/x/x7l00djaf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="irx4tpg6l"/><path class="x7l00djaf"/>`,
		"fallback": "pixel:edit-solid",
	});
}

export default Component;
