import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l29pplbre.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l29pplbre"/>`,
		"fallback": "streamline-sharp:chef-toque-hat-remix",
	});
}

export default Component;
