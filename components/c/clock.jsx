import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cvqusacuk.css';
import '../../css/p/pe8xatc2t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cvqusacuk"/><path class="pe8xatc2t"/>`,
		"fallback": "pixel:clock",
	});
}

export default Component;
