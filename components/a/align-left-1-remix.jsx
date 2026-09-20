import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pmennq3iv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pmennq3iv"/>`,
		"fallback": "streamline-sharp:align-left-1-remix",
	});
}

export default Component;
