import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tkam1aclb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tkam1aclb"/>`,
		"fallback": "streamline-sharp:deepfake-technology-2-remix",
	});
}

export default Component;
