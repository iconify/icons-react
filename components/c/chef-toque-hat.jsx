import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r8q01aczi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r8q01aczi"/>`,
		"fallback": "streamline-sharp:chef-toque-hat",
	});
}

export default Component;
