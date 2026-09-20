import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x3wi9ouxj.css';
import '../../css/y/ykjnrse8x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x3wi9ouxj"/><path class="ykjnrse8x"/>`,
		"fallback": "octicon:codescan-24",
	});
}

export default Component;
