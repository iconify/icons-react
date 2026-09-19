import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g9k06bc4p.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g9k06bc4p"/>`,
		"fallback": "cib:hootsuite",
	});
}

export default Component;
