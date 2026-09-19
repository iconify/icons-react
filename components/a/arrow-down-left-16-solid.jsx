import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ie5rf59dn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ie5rf59dn"/>`,
		"fallback": "heroicons:arrow-down-left-16-solid",
	});
}

export default Component;
