import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/stdec_j8d.css';
import '../../css/j/jryo535wr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="stdec_j8d"/><path class="jryo535wr"/>`,
		"fallback": "streamline-ultimate:image-file-jpg-bold",
	});
}

export default Component;
