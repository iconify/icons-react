import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s091mgb0k.css';
import '../../css/c/cbpc6zbgf.css';
import '../../css/m/m5eds2f1v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="s091mgb0k"/><circle class="cbpc6zbgf"/><circle class="m5eds2f1v"/></g>`,
		"fallback": "meteor-icons:discord",
	});
}

export default Component;
