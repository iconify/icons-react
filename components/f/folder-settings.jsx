import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/h/h445vw.css';
import '../../css/l/l6j71m.css';
import '../../css/n/nsbucn.css';
import '../../css/j/joz4ju.css';
import '../../css/s/saqx7q.css';
import '../../css/s/so-from-62.css';
import '../../css/f/fade-to-1.css';
import '../../css/d/d-tnsd9f.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c h445vw"/><path class="a0m25c l6j71m"/><path class="a0m25c nsbucn"/><path class="a0m25c joz4ju"/><path class="a0m25c saqx7q"/>`,
		"fallback": "line-md:folder-settings",
	});
}

export default Component;
