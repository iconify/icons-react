import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/a4jf0acco.css';
import '../../css/g/gbx0a2bnh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="a4jf0acco"/><rect class="gbx0a2bnh"/></g>`,
		"fallback": "proicons:book-2",
	});
}

export default Component;
