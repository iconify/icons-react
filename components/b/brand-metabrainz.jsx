import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/crit0-b8c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="crit0-b8c"/>`,
		"fallback": "tabler:brand-metabrainz",
	});
}

export default Component;
