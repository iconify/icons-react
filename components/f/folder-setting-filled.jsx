import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ymx794b5s.css';
import '../../css/h/h1_3onb4f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ymx794b5s"/><path class="h1_3onb4f"/>`,
		"fallback": "tdesign:folder-setting-filled",
	});
}

export default Component;
