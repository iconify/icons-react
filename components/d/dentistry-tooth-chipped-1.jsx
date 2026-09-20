import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddai7vvoh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ddai7vvoh"/>`,
		"fallback": "streamline-ultimate:dentistry-tooth-chipped-1",
	});
}

export default Component;
