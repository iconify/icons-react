import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rc0nz7arf.css';
import '../../css/f/fu6k9ir6c.css';
import '../../css/g/g29n01b-u.css';
import '../../css/y/y4eq8bc3m.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rc0nz7arf"/><path class="fu6k9ir6c"/><path class="g29n01b-u"/><path class="y4eq8bc3m"/>`,
		"fallback": "energy-icons:electric-heater-20",
	});
}

export default Component;
