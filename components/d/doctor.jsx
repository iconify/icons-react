import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mbpfbqfii.css';
import '../../css/n/nrolmxo4x.css';
import '../../css/j/jophfjbha.css';

const viewBox = {"width":21,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mbpfbqfii"/><path class="nrolmxo4x"/><path class="jophfjbha"/>`,
		"fallback": "fontisto:doctor",
	});
}

export default Component;
