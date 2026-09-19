import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t0d6phkfv.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t0d6phkfv"/>`,
		"fallback": "fa7-solid:file-waveform",
	});
}

export default Component;
