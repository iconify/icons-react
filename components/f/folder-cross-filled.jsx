import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bu-hzwb2f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bu-hzwb2f"/>`,
		"fallback": "reicon:folder-cross-filled",
	});
}

export default Component;
