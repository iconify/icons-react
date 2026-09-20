import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gwvt3-eti.css';
import '../../css/y/ybcb2abco.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gwvt3-eti"/><path class="ybcb2abco"/>`,
		"fallback": "mingcute:cat-line",
	});
}

export default Component;
