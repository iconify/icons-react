import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fq4twt71z.css';
import '../../css/p/pw-4zvb5w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="fq4twt71z"/><path class="pw-4zvb5w"/></g>`,
		"fallback": "streamline-sharp-color:chair-2-flat",
	});
}

export default Component;
