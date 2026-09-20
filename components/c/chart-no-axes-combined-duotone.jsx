import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b24wgm90r.css';
import '../../css/f/fm703rmtm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="b24wgm90r"/><path class="fm703rmtm"/></g>`,
		"fallback": "keyline-icons:chart-no-axes-combined-duotone",
	});
}

export default Component;
