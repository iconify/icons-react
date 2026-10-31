import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/smj7c3byz.css';
import '../../css/i/ir3eif-7d.css';
import '../../css/v/vj4ug-bwr.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="smj7c3byz"/><path class="ir3eif-7d"/><path class="vj4ug-bwr"/>`,
		"fallback": "tabler-flags:bosnia-and-herzegovina",
	});
}

export default Component;
