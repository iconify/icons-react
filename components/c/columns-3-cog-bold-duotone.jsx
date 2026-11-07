import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v741mrbgv.css';
import '../../css/g/gyjvu3nrz.css';
import '../../css/q/qqqjwibyx.css';
import '../../css/x/xihhsebra.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="v741mrbgv"/><path class="gyjvu3nrz"/><path class="qqqjwibyx"/><path class="xihhsebra"/>`,
		"fallback": "solar:columns-3-cog-bold-duotone",
	});
}

export default Component;
