import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/na8gr4b-e.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="na8gr4b-e"/>`,
		"fallback": "dinkie-icons:game-die",
	});
}

export default Component;
