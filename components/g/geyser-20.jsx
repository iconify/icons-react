import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rbjnu1baw.css';
import '../../css/b/bzz03rb9j.css';
import '../../css/g/gwv7mvsvu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rbjnu1baw"/><path class="bzz03rb9j"/><path class="gwv7mvsvu"/>`,
		"fallback": "energy-icons:geyser-20",
	});
}

export default Component;
