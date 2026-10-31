import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y551u-61r.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y551u-61r"/>`,
		"fallback": "sidekickicons:floppy-disk-20-solid",
	});
}

export default Component;
