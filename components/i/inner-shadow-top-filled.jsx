import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zyhh4ob9a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zyhh4ob9a"/>`,
		"fallback": "tabler:inner-shadow-top-filled",
	});
}

export default Component;
