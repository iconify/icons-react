import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gqfw9ounj.css';
import '../../css/i/ibxubn_yy.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gqfw9ounj"/><path class="ibxubn_yy"/>`,
		"fallback": "energy-icons:dehumidifier-20",
	});
}

export default Component;
