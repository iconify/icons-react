import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/efz48nbtd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="efz48nbtd"/>`,
		"fallback": "streamline-plump:graphic-template-website-ui-solid",
	});
}

export default Component;
