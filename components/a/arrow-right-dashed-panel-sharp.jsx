import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vnck60kii.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vnck60kii"/>`,
		"fallback": "keyline-icons:arrow-right-dashed-panel-sharp",
	});
}

export default Component;
