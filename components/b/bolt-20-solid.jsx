import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v6jcmg63q.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v6jcmg63q"/>`,
		"fallback": "heroicons:bolt-20-solid",
	});
}

export default Component;
