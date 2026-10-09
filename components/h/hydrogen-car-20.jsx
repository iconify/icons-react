import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/htffp3b5a.css';
import '../../css/q/qu-izxe2j.css';
import '../../css/f/fsc5e1bho.css';
import '../../css/f/fqrraspid.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="htffp3b5a"/><path class="qu-izxe2j"/><path class="fsc5e1bho"/><path class="fqrraspid"/>`,
		"fallback": "energy-icons:hydrogen-car-20",
	});
}

export default Component;
