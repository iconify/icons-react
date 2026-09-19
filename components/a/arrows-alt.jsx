import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ac0dbpb4a.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ac0dbpb4a"/>`,
		"fallback": "fa7-solid:arrows-alt",
	});
}

export default Component;
