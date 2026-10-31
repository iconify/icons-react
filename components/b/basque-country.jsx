import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u_4c0abso.css';
import '../../css/h/hni6s_bol.css';
import '../../css/y/yjdgsrw6x.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u_4c0abso"/><path class="hni6s_bol"/><path class="yjdgsrw6x"/>`,
		"fallback": "tabler-flags:basque-country",
	});
}

export default Component;
