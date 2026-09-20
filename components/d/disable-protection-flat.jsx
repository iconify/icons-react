import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kqq72fbim.css';
import '../../css/a/axo4shbcf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kqq72fbim"/><path clip-rule="evenodd" class="axo4shbcf"/></g>`,
		"fallback": "streamline-plump-color:disable-protection-flat",
	});
}

export default Component;
