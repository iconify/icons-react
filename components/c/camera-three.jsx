import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv130ab-t.css';
import '../../css/r/rd9mw5o4z.css';
import '../../css/g/g1bnw7bmv.css';
import '../../css/m/myztgkbqh.css';
import '../../css/i/i46u6tbey.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGQVRyPTAX"><g class="hv130ab-t"><rect class="rd9mw5o4z"/><path class="g1bnw7bmv"/><circle class="myztgkbqh"/><path class="i46u6tbey"/></g></mask></defs><path mask="url(#SVGQVRyPTAX)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:camera-three",
	});
}

export default Component;
