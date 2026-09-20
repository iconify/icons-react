import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eumvyw40q.css';
import '../../css/o/ola1aj4br.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eumvyw40q"/><path class="ola1aj4br"/>`,
		"fallback": "streamline-ultimate:barcode-bold",
	});
}

export default Component;
