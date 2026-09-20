import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nj4cqpcwq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nj4cqpcwq"/>`,
		"fallback": "tabler:input-spark",
	});
}

export default Component;
