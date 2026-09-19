import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lo56wubgm.css';

const viewBox = {"width":1948,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lo56wubgm"/>`,
		"fallback": "fontelico:emo-shoot",
	});
}

export default Component;
