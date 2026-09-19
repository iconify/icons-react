import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kb-3hdh2i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kb-3hdh2i"/>`,
		"fallback": "ps:dry-normal-hight-heat",
	});
}

export default Component;
