import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e9penwvtt.css';
import '../../css/f/f-2vaaboy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e9penwvtt"/><path class="f-2vaaboy"/>`,
		"fallback": "tdesign:chart-add-filled",
	});
}

export default Component;
