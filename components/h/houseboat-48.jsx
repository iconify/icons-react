import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wmhs3ccli.css';
import '../../css/c/cy8_11dig.css';
import '../../css/o/o4-ileblc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wmhs3ccli"/><path class="cy8_11dig"/><path class="o4-ileblc"/>`,
		"fallback": "energy-icons:houseboat-48",
	});
}

export default Component;
