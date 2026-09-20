import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lfoen36tg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lfoen36tg"/>`,
		"fallback": "streamline-sharp:buttons-all-solid",
	});
}

export default Component;
