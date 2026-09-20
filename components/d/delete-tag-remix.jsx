import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vvhf1p0al.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vvhf1p0al"/>`,
		"fallback": "streamline-sharp:delete-tag-remix",
	});
}

export default Component;
