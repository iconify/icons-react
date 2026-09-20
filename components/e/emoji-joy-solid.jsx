import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ov5bo0d0x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ov5bo0d0x"/>`,
		"fallback": "stash:emoji-joy-solid",
	});
}

export default Component;
