import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ahikm_xfy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ahikm_xfy"/>`,
		"fallback": "tabler:arrow-big-down-filled",
	});
}

export default Component;
