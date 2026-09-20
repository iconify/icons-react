import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fw-0snbeq.css';
import '../../css/z/zxh8vllwu.css';
import '../../css/t/tfwvdwbxo.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fw-0snbeq"/><path class="ouiIcon__fillSecondary zxh8vllwu"/><path class="tfwvdwbxo"/>`,
		"fallback": "oui:app-console",
	});
}

export default Component;
