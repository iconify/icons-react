import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gmbolmbel.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gmbolmbel"/>`,
		"fallback": "pinhead:car-beside-person-sleeping-in-bed",
	});
}

export default Component;
