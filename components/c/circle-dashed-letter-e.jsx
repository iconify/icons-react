import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ty5syd2kn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ty5syd2kn"/>`,
		"fallback": "tabler:circle-dashed-letter-e",
	});
}

export default Component;
