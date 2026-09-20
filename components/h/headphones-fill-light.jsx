import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/t/tv4g0ebdr.css';
import '../../css/d/doxjibqjc.css';
import '../../css/x/x-fkqvbof.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><rect class="tv4g0ebdr"/><rect class="doxjibqjc"/><path class="x-fkqvbof"/></g>`,
		"fallback": "lets-icons:headphones-fill-light",
	});
}

export default Component;
