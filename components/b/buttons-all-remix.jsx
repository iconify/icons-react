import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ggq45fbgd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ggq45fbgd"/>`,
		"fallback": "streamline-sharp:buttons-all-remix",
	});
}

export default Component;
