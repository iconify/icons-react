import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ojz-7nhbw.css';
import '../../css/z/zr7zg75lz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ojz-7nhbw"/><path class="zr7zg75lz"/>`,
		"fallback": "withicons-bauhaus:columns",
	});
}

export default Component;
