import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iybzqqbxo.css';
import '../../css/g/g4708uo1b.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iybzqqbxo"/><path class="g4708uo1b"/>`,
		"fallback": "energy-icons:icicles-20",
	});
}

export default Component;
