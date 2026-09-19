import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hgcm-dbpj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hgcm-dbpj"/>`,
		"fallback": "cbi:clock-euro",
	});
}

export default Component;
