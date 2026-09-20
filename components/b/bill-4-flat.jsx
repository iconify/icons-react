import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v-c2abpgi.css';
import '../../css/i/iwtrj1bmp.css';
import '../../css/a/a0q4j0b3a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v-c2abpgi"/><path class="iwtrj1bmp"/><path class="a0q4j0b3a"/></g>`,
		"fallback": "streamline-sharp-color:bill-4-flat",
	});
}

export default Component;
