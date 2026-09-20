import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zbkzf60tt.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zbkzf60tt"/>`,
		"fallback": "pinhead:campsite-with-yen-yuan",
	});
}

export default Component;
