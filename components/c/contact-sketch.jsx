import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/hgjl9rb9s.css';
import '../../css/s/s0eupibke.css';
import '../../css/j/jzreslb8g.css';
import '../../css/i/ies8h8b4m.css';
import '../../css/c/cy-os_a7c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="hgjl9rb9s"/><path class="s0eupibke wm-k"/><path class="jzreslb8g wm-a"/><path class="ies8h8b4m wm-k"/><path class="cy-os_a7c wm-a"/></g>`,
		"fallback": "withicons:contact-sketch",
	});
}

export default Component;
