import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l6apakbos.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l6apakbos"/>`,
		"fallback": "heroicons:arrow-uturn-up-20-solid",
	});
}

export default Component;
