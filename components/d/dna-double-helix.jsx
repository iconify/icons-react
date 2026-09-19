import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3wqb6ppo.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v3wqb6ppo"/>`,
		"fallback": "dinkie-icons:dna-double-helix",
	});
}

export default Component;
