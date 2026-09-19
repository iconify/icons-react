import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bpfg_4bzq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bpfg_4bzq"/>`,
		"fallback": "boxicons:gaming",
	});
}

export default Component;
