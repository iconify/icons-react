import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gbcgdzjlw.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gbcgdzjlw"/>`,
		"fallback": "pinhead:handled-teacup-and-saucer-and-pawprint",
	});
}

export default Component;
