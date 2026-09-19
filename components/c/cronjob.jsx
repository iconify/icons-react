import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qdb6-6b_s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qdb6-6b_s"/>`,
		"fallback": "eos-icons:cronjob",
	});
}

export default Component;
