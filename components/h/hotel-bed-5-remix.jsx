import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gbldn1bch.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gbldn1bch"/>`,
		"fallback": "streamline-plump:hotel-bed-5-remix",
	});
}

export default Component;
