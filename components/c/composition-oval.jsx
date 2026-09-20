import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b3___fhtt.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b3___fhtt"/>`,
		"fallback": "streamline:composition-oval",
	});
}

export default Component;
