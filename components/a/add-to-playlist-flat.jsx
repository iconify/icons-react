import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/z/z5nh3rbbo.css';
import '../../css/v/vqxx095or.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="z5nh3rbbo"/><path class="vqxx095or"/></g>`,
		"fallback": "streamline-flex-color:add-to-playlist-flat",
	});
}

export default Component;
