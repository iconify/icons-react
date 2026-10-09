import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kbu-t6btd.css';
import '../../css/h/hg1lnachy.css';
import '../../css/o/o1qwb3bbx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kbu-t6btd"/><path class="hg1lnachy"/><path class="o1qwb3bbx"/>`,
		"fallback": "energy-icons:arrow-up-square-48-bold",
	});
}

export default Component;
