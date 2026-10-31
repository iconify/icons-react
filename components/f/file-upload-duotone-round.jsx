import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b6fkvxgfa.css';
import '../../css/a/aafx1mfhd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b6fkvxgfa"/><path class="aafx1mfhd"/></g>`,
		"fallback": "coolicons:file-upload-duotone-round",
	});
}

export default Component;
