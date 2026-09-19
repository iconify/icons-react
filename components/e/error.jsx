import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zl-nlrbcy.css';
import '../../css/t/tbhil46-f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zl-nlrbcy"/><path class="tbhil46-f"/>`,
		"fallback": "bx:error",
	});
}

export default Component;
