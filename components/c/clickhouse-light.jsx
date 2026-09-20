import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m4-4i3wlt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m4-4i3wlt"/>`,
		"fallback": "selfhst:clickhouse-light",
	});
}

export default Component;
