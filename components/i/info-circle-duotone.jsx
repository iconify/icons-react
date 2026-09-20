import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l57giywpk.css';
import '../../css/f/fue51nqfc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l57giywpk"/><path class="fue51nqfc"/>`,
		"fallback": "stash:info-circle-duotone",
	});
}

export default Component;
