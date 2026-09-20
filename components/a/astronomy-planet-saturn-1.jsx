import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dxd5kuw6f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dxd5kuw6f"/>`,
		"fallback": "streamline-ultimate:astronomy-planet-saturn-1",
	});
}

export default Component;
