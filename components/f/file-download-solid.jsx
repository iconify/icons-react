import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lelhfpbde.css';
import '../../css/a/a4jsaxbri.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lelhfpbde"/><path class="a4jsaxbri"/>`,
		"fallback": "basil:file-download-solid",
	});
}

export default Component;
