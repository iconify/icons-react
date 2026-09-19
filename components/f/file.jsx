import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s2sandlqm.css';
import '../../css/x/xgtqlm-cw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="duoicon-secondary-layer s2sandlqm"/><path class="duoicon-primary-layer xgtqlm-cw"/>`,
		"fallback": "duo-icons:file",
	});
}

export default Component;
