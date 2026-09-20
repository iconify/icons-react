import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u-e4ckbto.css';
import '../../css/b/birgbmbwv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u-e4ckbto"/><path clip-rule="evenodd" class="birgbmbwv"/>`,
		"fallback": "qlementine-icons:file-manager-16",
	});
}

export default Component;
