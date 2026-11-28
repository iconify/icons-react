import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ogd--ab7n.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/mbini9b6h.css';
import '../../css/b/b9zxt3bwp.css';
import '../../css/y/y8ul2mg1f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ogd--ab7n secondary"/><g class="dt0cm9dhy primary"><path class="mbini9b6h"/><path class="b9zxt3bwp"/><path class="y8ul2mg1f"/></g>`,
		"fallback": "iconaut:chart-radar-duo",
	});
}

export default Component;
