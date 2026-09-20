import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zt-nhpvlw.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zt-nhpvlw"/>`,
		"fallback": "pinhead:5-minus-above-water",
	});
}

export default Component;
