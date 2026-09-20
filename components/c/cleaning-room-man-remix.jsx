import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zfnvn2bvg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zfnvn2bvg"/>`,
		"fallback": "streamline-sharp:cleaning-room-man-remix",
	});
}

export default Component;
