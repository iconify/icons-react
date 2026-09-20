import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/o-alqbkvq.css';
import '../../css/p/pt0gcvbpi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="o-alqbkvq"/><path class="pt0gcvbpi"/></g>`,
		"fallback": "streamline-ultimate:human-resources-search-men",
	});
}

export default Component;
