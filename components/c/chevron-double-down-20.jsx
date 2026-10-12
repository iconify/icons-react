import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/laonxqbvy.css';
import '../../css/g/gmakb7b-g.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="laonxqbvy"/><path class="gmakb7b-g"/>`,
		"fallback": "garden:chevron-double-down-20",
	});
}

export default Component;
