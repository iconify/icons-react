import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/g/ggi3ly9zi.css';
import '../../css/j/jzc552pxa.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="ggi3ly9zi"/><path class="jzc552pxa"/></g>`,
		"fallback": "icon-park-outline:api-app",
	});
}

export default Component;
