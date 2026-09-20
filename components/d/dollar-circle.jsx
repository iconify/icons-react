import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e3aun037f.css';
import '../../css/m/mt-ippa9w.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e3aun037f"/><path clip-rule="evenodd" class="mt-ippa9w"/>`,
		"fallback": "lineicons:dollar-circle",
	});
}

export default Component;
