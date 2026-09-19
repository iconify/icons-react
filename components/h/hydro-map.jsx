import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ghf9evaie.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ghf9evaie"/>`,
		"fallback": "gis:hydro-map",
	});
}

export default Component;
