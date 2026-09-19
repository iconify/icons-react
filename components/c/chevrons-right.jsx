import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/attzhvbqz.css';
import '../../css/v/vzeo59nus.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="attzhvbqz"/><path class="vzeo59nus"/>`,
		"fallback": "boxicons:chevrons-right",
	});
}

export default Component;
