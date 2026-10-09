import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u5aa0tfys.css';
import '../../css/r/r1qak2b5n.css';
import '../../css/h/h8k7vyb9j.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u5aa0tfys"/><path class="r1qak2b5n"/><path class="h8k7vyb9j"/>`,
		"fallback": "energy-icons:cloud-sync-20",
	});
}

export default Component;
