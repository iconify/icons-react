import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tv09wxrvd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tv09wxrvd"/>`,
		"fallback": "vadivam:circle-dot-dashed",
	});
}

export default Component;
