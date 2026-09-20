import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/plru1qb3z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="plru1qb3z"/>`,
		"fallback": "ix:cam-disk-6k-seg",
	});
}

export default Component;
