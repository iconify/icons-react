import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gsnsvvblt.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gsnsvvblt"/>`,
		"fallback": "pinhead:ice-cubes-to-cup-from-dispensing-machine-with-snowflake",
	});
}

export default Component;
