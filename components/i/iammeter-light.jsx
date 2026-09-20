import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bypt6tfji.css';
import '../../css/t/tpo-q54ny.css';
import '../../css/m/megpyvbvn.css';
import '../../css/g/gyexd6ugj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bypt6tfji"/><path class="tpo-q54ny"/><path clip-rule="evenodd" class="megpyvbvn"/><path clip-rule="evenodd" class="gyexd6ugj"/>`,
		"fallback": "selfhst:iammeter-light",
	});
}

export default Component;
