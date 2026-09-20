import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uqn0ipa3k.css';
import '../../css/s/sw1pryb5j.css';
import '../../css/l/lyqxx6wlu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uqn0ipa3k"/><path class="sw1pryb5j"/><path class="lyqxx6wlu"/></g>`,
		"fallback": "tdesign:file-image",
	});
}

export default Component;
