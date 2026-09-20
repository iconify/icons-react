import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uh0m0cy5a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uh0m0cy5a"/>`,
		"fallback": "tabler:acrobatic",
	});
}

export default Component;
