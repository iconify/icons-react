import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/u/u5rdufb5j.css';
import '../../css/g/gs-_58bxy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="u5rdufb5j"/><path class="gs-_58bxy"/></g>`,
		"fallback": "streamline-logos:cnn-logo",
	});
}

export default Component;
