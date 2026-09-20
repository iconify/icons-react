import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fkpmhdl7z.css';
import '../../css/j/jynbi7e4o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="fkpmhdl7z"/><path class="jynbi7e4o"/></g>`,
		"fallback": "tabler:cake-off",
	});
}

export default Component;
