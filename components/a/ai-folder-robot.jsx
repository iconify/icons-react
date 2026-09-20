import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/o/o7mk0ob1b.css';
import '../../css/g/goy1wnb5r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="o7mk0ob1b"/><path class="goy1wnb5r"/></g>`,
		"fallback": "streamline-sharp:ai-folder-robot",
	});
}

export default Component;
