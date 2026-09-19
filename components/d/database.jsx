import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qil2sac_k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qil2sac_k"/>`,
		"fallback": "eos-icons:database",
	});
}

export default Component;
