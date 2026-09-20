import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hyk-28_6e.css';
import '../../css/v/v04tsihaj.css';
import '../../css/e/e9wu31bpe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hyk-28_6e"/><path class="v04tsihaj"/><path class="e9wu31bpe"/></g>`,
		"fallback": "streamline-ultimate-color:ati-logo",
	});
}

export default Component;
