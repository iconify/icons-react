import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ro-ic_bnu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ro-ic_bnu"/>`,
		"fallback": "basil:home-solid",
	});
}

export default Component;
