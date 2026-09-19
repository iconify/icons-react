import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gzas9hb5a.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gzas9hb5a"/>`,
		"fallback": "carbon:corner",
	});
}

export default Component;
