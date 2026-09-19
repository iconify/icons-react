import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c2zfbfbns.css';
import '../../css/m/m8_yakbvd.css';
import '../../css/w/wurw0faww.css';
import '../../css/m/mt8xaybfz.css';
import '../../css/x/x0jgdesyz.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c2zfbfbns"/><path class="m8_yakbvd"/><path class="wurw0faww"/><path class="mt8xaybfz"/><path class="x0jgdesyz"/>`,
		"fallback": "devicon:homebrew",
	});
}

export default Component;
