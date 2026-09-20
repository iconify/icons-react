import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x63fcn5tz.css';
import '../../css/t/tymptoban.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x63fcn5tz"/><path class="tymptoban"/>`,
		"fallback": "stash:check-circle-duotone",
	});
}

export default Component;
