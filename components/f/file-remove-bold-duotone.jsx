import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kgd8bzbml.css';
import '../../css/q/qxh6zf45v.css';
import '../../css/b/bk9fnabkq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kgd8bzbml"/><path class="qxh6zf45v"/><path class="bk9fnabkq"/>`,
		"fallback": "solar:file-remove-bold-duotone",
	});
}

export default Component;
