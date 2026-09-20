import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v4or_ln8c.css';
import '../../css/p/pmdjauv5d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v4or_ln8c"/><path class="pmdjauv5d"/>`,
		"fallback": "stash:image-ban-light",
	});
}

export default Component;
