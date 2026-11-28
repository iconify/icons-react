import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z4uqq4buf.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/fd0uewd8f.css';
import '../../css/q/q940tbb7t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary z4uqq4buf"/><g class="dt0cm9dhy primary"><path class="fd0uewd8f"/><path class="q940tbb7t"/></g>`,
		"fallback": "iconaut:castle-duo",
	});
}

export default Component;
