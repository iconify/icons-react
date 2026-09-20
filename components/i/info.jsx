import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/axarcbb2r.css';
import '../../css/w/wp23mgbqq.css';
import '../../css/f/fqg7gacch.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="axarcbb2r"/><path class="wp23mgbqq"/><circle class="fqg7gacch"/></g>`,
		"fallback": "proicons:info",
	});
}

export default Component;
