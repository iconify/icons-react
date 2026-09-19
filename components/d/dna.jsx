import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hg31zhsfb.css';

const viewBox = {"width":506,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hg31zhsfb"/>`,
		"fallback": "file-icons:dna",
	});
}

export default Component;
