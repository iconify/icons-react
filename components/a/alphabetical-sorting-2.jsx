import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bngvwn_2d.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bngvwn_2d"/>`,
		"fallback": "icons8:alphabetical-sorting-2",
	});
}

export default Component;
