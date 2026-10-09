import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mzeztmj2w.css';
import '../../css/e/e9-17_hwj.css';
import '../../css/g/gsdjs9b8k.css';
import '../../css/u/uoo0tpb9l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mzeztmj2w"/><path class="e9-17_hwj"/><path class="gsdjs9b8k"/><path class="uoo0tpb9l"/>`,
		"fallback": "energy-icons:api-key-48",
	});
}

export default Component;
