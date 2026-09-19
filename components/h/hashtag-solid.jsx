import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nddaxw3ui.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nddaxw3ui"/>`,
		"fallback": "heroicons:hashtag-solid",
	});
}

export default Component;
