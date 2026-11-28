import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uzjrmyb6n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uzjrmyb6n"/>`,
		"fallback": "noviair:id-card-x",
	});
}

export default Component;
