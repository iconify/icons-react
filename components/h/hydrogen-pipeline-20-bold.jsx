import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lx-_djyyn.css';
import '../../css/p/pci-8zxna.css';
import '../../css/j/j83cdtwkl.css';
import '../../css/z/z2lgmebod.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lx-_djyyn"/><path class="pci-8zxna"/><path class="j83cdtwkl"/><path class="z2lgmebod"/>`,
		"fallback": "energy-icons:hydrogen-pipeline-20-bold",
	});
}

export default Component;
