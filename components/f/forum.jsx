import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lw63rpeky.css';
import '../../css/m/mfbf4utcm.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lw63rpeky"/><path class="mfbf4utcm"/>`,
		"fallback": "carbon:forum",
	});
}

export default Component;
