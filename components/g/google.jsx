import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g-kukhd7x.css';

const viewBox = {"width":304,"height":488};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g-kukhd7x"/>`,
		"fallback": "ps:google",
	});
}

export default Component;
