import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ggq3csbcs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ggq3csbcs"/>`,
		"fallback": "streamline-sharp:business-idea-money-solid",
	});
}

export default Component;
