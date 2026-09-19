import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tjsgb-bry.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tjsgb-bry"/>`,
		"fallback": "f7:dot-radiowaves-left-right",
	});
}

export default Component;
