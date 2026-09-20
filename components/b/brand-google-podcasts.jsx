import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o-5e8sbis.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o-5e8sbis"/>`,
		"fallback": "tabler:brand-google-podcasts",
	});
}

export default Component;
