import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zeezzsgew.css';
import '../../css/l/lxcqcfbmi.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zeezzsgew"/><path class="lxcqcfbmi"/>`,
		"fallback": "tabler-flags:bangladesh",
	});
}

export default Component;
