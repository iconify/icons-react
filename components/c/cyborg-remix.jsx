import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v0lyi-bqc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="v0lyi-bqc"/>`,
		"fallback": "streamline-sharp:cyborg-remix",
	});
}

export default Component;
