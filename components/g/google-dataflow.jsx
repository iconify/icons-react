import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s5nf9jbzk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s5nf9jbzk"/>`,
		"fallback": "thesvg-color:google-dataflow",
	});
}

export default Component;
