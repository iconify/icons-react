import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g7keyur9y.css';
import '../../css/g/gegmizbrp.css';
import '../../css/n/nykr5s_qb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g7keyur9y"/><path class="gegmizbrp"/><path class="nykr5s_qb"/>`,
		"fallback": "streamline-pixel:computer-old-electronics-bug",
	});
}

export default Component;
