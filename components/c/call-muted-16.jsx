import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p2yet2bpf.css';
import '../../css/w/wn3ahbbxp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="p2yet2bpf"/><path class="wn3ahbbxp"/>`,
		"fallback": "qlementine-icons:call-muted-16",
	});
}

export default Component;
