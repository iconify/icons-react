import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rekkswb7u.css';
import '../../css/f/f1fwzpb3n.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rekkswb7u"/><path class="f1fwzpb3n"/>`,
		"fallback": "energy-icons:credit-card-20",
	});
}

export default Component;
