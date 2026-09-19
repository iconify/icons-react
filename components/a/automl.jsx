import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vx1_gabtl.css';
import '../../css/j/jk0rnfymy.css';
import '../../css/i/io_0phpjr.css';
import '../../css/f/fuatp5wib.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vx1_gabtl"/><path class="jk0rnfymy"/><path class="io_0phpjr"/><path class="fuatp5wib"/>`,
		"fallback": "gcp:automl",
	});
}

export default Component;
