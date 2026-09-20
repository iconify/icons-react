import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n3n_6vj_f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n3n_6vj_f"/>`,
		"fallback": "tabler:brand-tumblr-filled",
	});
}

export default Component;
