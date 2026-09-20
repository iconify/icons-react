import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lxen8rsgf.css';
import '../../css/f/fbe23xbqo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="lxen8rsgf"/><path class="fbe23xbqo"/></g>`,
		"fallback": "tabler:backpack",
	});
}

export default Component;
