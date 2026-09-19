import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ya8gu7fuq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ya8gu7fuq"/>`,
		"fallback": "cib:archive-of-our-own",
	});
}

export default Component;
