import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vgqg5hbzl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vgqg5hbzl"/>`,
		"fallback": "streamline-sharp:empty-recycle-bin-1-remix",
	});
}

export default Component;
