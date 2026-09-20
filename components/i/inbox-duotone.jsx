import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mbjt7ebfi.css';
import '../../css/j/jhxqmf5zh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mbjt7ebfi"/><path class="jhxqmf5zh"/>`,
		"fallback": "stash:inbox-duotone",
	});
}

export default Component;
