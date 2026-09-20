import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aisis0a7a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="aisis0a7a"/>`,
		"fallback": "nrk:checkbox-checked-solid",
	});
}

export default Component;
