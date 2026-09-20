import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/wbgejounq.css';
import '../../css/q/qjc61bqyj.css';
import '../../css/f/fx-19q-7k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="wbgejounq"/><path class="qjc61bqyj"/><path class="fx-19q-7k"/></g>`,
		"fallback": "streamline-ultimate:chef-gear-gloves",
	});
}

export default Component;
