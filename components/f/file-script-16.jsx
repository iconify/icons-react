import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oswg-4fqg.css';
import '../../css/e/eqbv84bej.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oswg-4fqg"/><path clip-rule="evenodd" class="eqbv84bej"/>`,
		"fallback": "qlementine-icons:file-script-16",
	});
}

export default Component;
