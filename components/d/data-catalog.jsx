import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o1fomeb2x.css';
import '../../css/i/ie06e3b6z.css';
import '../../css/t/tie69u5xw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o1fomeb2x"/><path class="ie06e3b6z"/><path class="tie69u5xw"/>`,
		"fallback": "gcp:data-catalog",
	});
}

export default Component;
