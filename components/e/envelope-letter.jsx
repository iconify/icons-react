import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hs7vf_bdw.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hs7vf_bdw"/>`,
		"fallback": "simple-line-icons:envelope-letter",
	});
}

export default Component;
