import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/liar723_x.css';
import '../../css/e/e85963y7t.css';
import '../../css/b/blqbp4b6s.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="liar723_x"/><path class="e85963y7t"/><path class="blqbp4b6s"/>`,
		"fallback": "streamline-pixel:email-mail-open-address",
	});
}

export default Component;
