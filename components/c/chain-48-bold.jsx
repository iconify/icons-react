import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fcazebc-h.css';
import '../../css/r/r09w33bfe.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fcazebc-h"/><path class="r09w33bfe"/>`,
		"fallback": "energy-icons:chain-48-bold",
	});
}

export default Component;
