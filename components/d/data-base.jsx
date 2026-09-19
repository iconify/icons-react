import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-j-qfbkh.css';
import '../../css/x/xx4upobit.css';
import '../../css/b/b6ueueufz.css';
import '../../css/n/nvorv_bgg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m-j-qfbkh"/><circle class="xx4upobit"/><circle class="b6ueueufz"/><circle class="nvorv_bgg"/>`,
		"fallback": "carbon:data-base",
	});
}

export default Component;
