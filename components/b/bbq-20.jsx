import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c7x7egb-c.css';
import '../../css/s/sqs8isb_t.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c7x7egb-c"/><path class="sqs8isb_t"/>`,
		"fallback": "energy-icons:bbq-20",
	});
}

export default Component;
