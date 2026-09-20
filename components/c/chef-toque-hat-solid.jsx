import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qbe_snv5s.css';
import '../../css/h/hxb2u__jz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qbe_snv5s"/><path class="hxb2u__jz"/>`,
		"fallback": "streamline-plump:chef-toque-hat-solid",
	});
}

export default Component;
