import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gwfmumbyc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gwfmumbyc"/>`,
		"fallback": "streamline:disable-heart",
	});
}

export default Component;
