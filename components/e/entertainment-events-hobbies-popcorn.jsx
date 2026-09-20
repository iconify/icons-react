import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ukm4dob-t.css';
import '../../css/y/yh-c-kbyg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ukm4dob-t"/><path class="yh-c-kbyg"/>`,
		"fallback": "streamline-pixel:entertainment-events-hobbies-popcorn",
	});
}

export default Component;
