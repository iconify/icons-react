import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qbajkz4iu.css';
import '../../css/a/a4jsaxbri.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qbajkz4iu"/><path class="a4jsaxbri"/>`,
		"fallback": "basil:file-upload-solid",
	});
}

export default Component;
