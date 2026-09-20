import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ac_spac3g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ac_spac3g"/>`,
		"fallback": "tabler:brand-apple",
	});
}

export default Component;
