import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a9a702bqk.css';
import '../../css/x/x9fa03dke.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a9a702bqk"/><path class="x9fa03dke"/></g>`,
		"fallback": "tdesign:city-ancient-1",
	});
}

export default Component;
