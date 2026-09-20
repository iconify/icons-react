import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/r/rfiktw.css';
import '../../css/y/yi3myz.css';
import '../../css/g/gjd-ug.css';
import '../../css/s/so-from-10.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c rfiktw"/><path class="a0m25c yi3myz"/><path class="a0m25c gjd-ug"/>`,
		"fallback": "line-md:chevron-small-triple-down",
	});
}

export default Component;
