import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/z/z0z0tz9vk.css';
import '../../css/y/y942uobmj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="z0z0tz9vk"/><path class="y942uobmj"/></g>`,
		"fallback": "streamline-sharp-color:horizontal-slider-2-flat",
	});
}

export default Component;
