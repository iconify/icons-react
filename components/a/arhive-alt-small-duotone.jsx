import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ye6tf12-p.css';
import '../../css/o/o84l7ebqt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ye6tf12-p"/><path class="o84l7ebqt"/>`,
		"fallback": "lets-icons:arhive-alt-small-duotone",
	});
}

export default Component;
