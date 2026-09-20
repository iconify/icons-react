import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xvz1-rbzp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xvz1-rbzp"/>`,
		"fallback": "pixelarticons:checkbox-on-sharp",
	});
}

export default Component;
