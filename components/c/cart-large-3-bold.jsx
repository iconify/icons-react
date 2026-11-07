import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lvyfd2cnm.css';
import '../../css/v/vs5n4kb4o.css';
import '../../css/p/ppziiibjw.css';
import '../../css/t/txahl3bke.css';
import '../../css/d/dspe7mbcd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lvyfd2cnm"/><path class="vs5n4kb4o"/><path class="ppziiibjw"/><path class="txahl3bke"/><path class="dspe7mbcd"/>`,
		"fallback": "solar:cart-large-3-bold",
	});
}

export default Component;
