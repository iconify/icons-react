import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m21xs_4fm.css';
import '../../css/u/u3htxq4vz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m21xs_4fm"/><path class="u3htxq4vz"/>`,
		"fallback": "energy-icons:humidifier-20",
	});
}

export default Component;
