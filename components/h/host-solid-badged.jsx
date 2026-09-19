import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wb-1labtg.css';
import '../../css/k/kgi65lb8e.css';
import '../../css/l/lmf0ecbhq.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="wb-1labtg"/><path class="kgi65lb8e"/><circle class="lmf0ecbhq"/>`,
		"fallback": "clarity:host-solid-badged",
	});
}

export default Component;
