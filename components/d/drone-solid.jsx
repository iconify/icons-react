import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/euc_4hbhc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="euc_4hbhc"/>`,
		"fallback": "streamline-sharp:drone-solid",
	});
}

export default Component;
