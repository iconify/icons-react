import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bq2872btg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bq2872btg"/>`,
		"fallback": "mdi:glass-mug-variant-off",
	});
}

export default Component;
