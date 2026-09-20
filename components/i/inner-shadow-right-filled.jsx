import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/re2_yqpfq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="re2_yqpfq"/>`,
		"fallback": "tabler:inner-shadow-right-filled",
	});
}

export default Component;
