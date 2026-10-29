import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p61vszmvl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p61vszmvl"/>`,
		"fallback": "withicons:film-solid",
	});
}

export default Component;
