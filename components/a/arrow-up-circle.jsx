import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a5uc81sas.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a5uc81sas"/>`,
		"fallback": "heroicons-outline:arrow-up-circle",
	});
}

export default Component;
