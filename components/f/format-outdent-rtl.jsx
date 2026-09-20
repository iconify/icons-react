import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a_l3vcc7k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path vector-effect="non-scaling-stroke" class="a_l3vcc7k"/>`,
		"fallback": "wordpress:format-outdent-rtl",
	});
}

export default Component;
