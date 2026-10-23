import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/boqsu83ib.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="boqsu83ib"/>`,
		"fallback": "vadivam:file-diff",
	});
}

export default Component;
