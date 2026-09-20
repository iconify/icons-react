import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bfcz9ib6w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bfcz9ib6w"/>`,
		"fallback": "simple-icons:geopandas",
	});
}

export default Component;
