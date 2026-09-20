import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sb9fzlbvy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sb9fzlbvy"/>`,
		"fallback": "tabler:circle-dashed-letter-l",
	});
}

export default Component;
