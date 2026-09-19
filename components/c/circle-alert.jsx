import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ymujj4bpl.css';
import '../../css/q/qxpha_tbq.css';
import '../../css/f/fuhxmiogs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ymujj4bpl"/><circle class="qxpha_tbq"/><path class="fuhxmiogs"/>`,
		"fallback": "circum:circle-alert",
	});
}

export default Component;
