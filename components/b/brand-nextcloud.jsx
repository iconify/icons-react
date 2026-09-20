import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jbq-nhb8s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jbq-nhb8s"/>`,
		"fallback": "tabler:brand-nextcloud",
	});
}

export default Component;
