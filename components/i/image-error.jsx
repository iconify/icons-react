import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gbgk870wa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gbgk870wa"/>`,
		"fallback": "tdesign:image-error",
	});
}

export default Component;
