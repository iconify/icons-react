import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zuqyv0bym.css';
import '../../css/f/fw5s8fbey.css';
import '../../css/u/ur0uie67w.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="zuqyv0bym"/><path clip-rule="evenodd" class="fw5s8fbey"/><path class="ur0uie67w"/></g>`,
		"fallback": "streamline-color:bug-virus-browser-flat",
	});
}

export default Component;
