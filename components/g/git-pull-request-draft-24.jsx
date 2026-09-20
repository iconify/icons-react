import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z9x4iebyl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z9x4iebyl"/>`,
		"fallback": "octicon:git-pull-request-draft-24",
	});
}

export default Component;
