import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cv18b4bwa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cv18b4bwa"/>`,
		"fallback": "withicons:git-compare-solid",
	});
}

export default Component;
