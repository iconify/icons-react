import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6tjmo3jk.css';
import '../../css/t/tf235abnd.css';
import '../../css/s/s656nxber.css';
import '../../css/f/f1l4zvtvq.css';
import '../../css/h/h_itdlq6j.css';
import '../../css/o/ouvl684ba.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="z6tjmo3jk"><path class="tf235abnd"/><path class="s656nxber"/><path class="f1l4zvtvq"/><path class="h_itdlq6j"/><path class="ouvl684ba"/></g>`,
		"fallback": "streamline-cyber:business-idea-user-3",
	});
}

export default Component;
