import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gl0thdbvq.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gl0thdbvq"/>`,
		"fallback": "fa7-solid:building-circle-check",
	});
}

export default Component;
