import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/njl66hb3c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="njl66hb3c"/>`,
		"fallback": "ri:hail-fill",
	});
}

export default Component;
