import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fq6ilubpw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fq6ilubpw"/>`,
		"fallback": "majesticons:battery-half",
	});
}

export default Component;
