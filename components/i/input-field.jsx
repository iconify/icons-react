import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bpf30lb0y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bpf30lb0y"/>`,
		"fallback": "ri:input-field",
	});
}

export default Component;
