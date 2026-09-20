import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bt922oa_d.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bt922oa_d"/>`,
		"fallback": "pajamas:google",
	});
}

export default Component;
