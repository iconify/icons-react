import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lbk-l7bpj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lbk-l7bpj"/>`,
		"fallback": "coolicons:asterisk-duotone-round",
	});
}

export default Component;
