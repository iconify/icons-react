import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/be-3lv5bq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="be-3lv5bq"/>`,
		"fallback": "streamline-ultimate:accounting-calculator-1",
	});
}

export default Component;
