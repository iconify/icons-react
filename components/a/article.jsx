import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h0g8bib8d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h0g8bib8d"/>`,
		"fallback": "nrk:article",
	});
}

export default Component;
