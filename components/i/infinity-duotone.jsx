import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dor5b2bew.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dor5b2bew"/>`,
		"fallback": "stash:infinity-duotone",
	});
}

export default Component;
