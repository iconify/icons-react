import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xz_zxo7ox.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xz_zxo7ox"/>`,
		"fallback": "cib:iata",
	});
}

export default Component;
